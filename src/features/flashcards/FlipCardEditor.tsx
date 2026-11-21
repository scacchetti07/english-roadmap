import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { RefreshCcw, Save, Undo2, Volume2, X } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { speak } from '@/lib/speech'
import { cn } from '@/lib/utils'
import { DEFAULT_DECK, useFlashcards, type Flashcard } from '@/store/flashcards'

type Side = 'front' | 'back'

export interface FlipCardEditorHandle {
  edit: (card: Flashcard) => void
}

const empty = { front: '', back: '', example: '', tags: '' }

export const FlipCardEditor = forwardRef<FlipCardEditorHandle>(function FlipCardEditor(_, ref) {
  const cards = useFlashcards((s) => s.cards)
  const add = useFlashcards((s) => s.add)
  const update = useFlashcards((s) => s.update)
  const reducedMotion = useReducedMotion()

  const [side, setSide] = useState<Side>('front')
  const [form, setForm] = useState(empty)
  const [deck, setDeck] = useState(DEFAULT_DECK)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [pulse, setPulse] = useState(0)
  const frontRef = useRef<HTMLTextAreaElement>(null)
  const backRef = useRef<HTMLTextAreaElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  const decks = useMemo(
    () => Array.from(new Set([DEFAULT_DECK, ...cards.map((c) => c.deck)])).sort(),
    [cards],
  )

  useImperativeHandle(ref, () => ({
    edit(card) {
      setEditingId(card.id)
      setForm({
        front: card.front,
        back: card.back,
        example: card.example,
        tags: card.tags.join(', '),
      })
      setDeck(card.deck)
      flipTo('front')
      rootRef.current?.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'center',
      })
    },
  }))

  // foca o campo do lado visível depois da animação de giro
  useEffect(() => {
    const el = side === 'front' ? frontRef.current : backRef.current
    const t = setTimeout(() => el?.focus({ preventScroll: true }), reducedMotion ? 0 : 280)
    return () => clearTimeout(t)
  }, [side, reducedMotion])

  function flipTo(next: Side) {
    setSide(next)
  }

  const reset = () => {
    setForm(empty)
    setEditingId(null)
    flipTo('front')
  }

  const save = () => {
    if (!form.front.trim()) {
      flipTo('front')
      toast.error('Escreva a frente do card')
      return
    }
    if (!form.back.trim()) {
      flipTo('back')
      toast.error('Escreva o verso do card')
      return
    }
    const tags = form.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)
    if (editingId) {
      update(editingId, {
        front: form.front.trim(),
        back: form.back.trim(),
        example: form.example.trim(),
        tags,
        deck: deck.trim() || DEFAULT_DECK,
      })
      toast.success('Card atualizado')
    } else {
      const created = add({ front: form.front, back: form.back, example: form.example, tags, deck })
      if (!created) {
        toast('Esse card já existe nesse baralho')
        return
      }
      toast.success('Card criado', { description: form.front.trim().slice(0, 60) })
    }
    setPulse((p) => p + 1)
    reset()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault()
      save()
    }
  }

  const faceBase =
    'backface-hidden absolute inset-0 flex flex-col rounded-2xl border p-5 shadow-xl sm:p-6'

  return (
    <div ref={rootRef} className="space-y-4" onKeyDown={onKeyDown}>
      <div className="flex items-center justify-between gap-2">
        <div
          className="bg-muted inline-flex rounded-lg p-1"
          role="tablist"
          aria-label="Lado do card"
        >
          {(['front', 'back'] as const).map((s) => (
            <button
              key={s}
              role="tab"
              type="button"
              aria-selected={side === s}
              onClick={() => flipTo(s)}
              className={cn(
                'cursor-pointer rounded-md px-4 py-1.5 text-sm font-medium transition-colors',
                side === s ? 'bg-background shadow-sm' : 'text-muted-foreground',
              )}
            >
              {s === 'front' ? 'Frente' : 'Verso'}
            </button>
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => flipTo(side === 'front' ? 'back' : 'front')}
        >
          <RefreshCcw /> Virar
        </Button>
      </div>

      <div className="perspective-1000">
        <motion.div
          key={pulse}
          initial={pulse ? { scale: 0.94, opacity: 0.6 } : false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <motion.div
            className="preserve-3d relative h-72 sm:h-80"
            animate={{ rotateY: side === 'front' ? 0 : 180 }}
            transition={
              reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 120, damping: 16 }
            }
          >
            {/* FRENTE */}
            <div
              className={cn(
                faceBase,
                'from-neon-cyan/15 via-card to-card border-neon-cyan/40 bg-gradient-to-br',
              )}
              inert={side !== 'front'}
              aria-hidden={side !== 'front'}
            >
              <div className="flex items-center justify-between">
                <span className="text-neon-cyan text-xs font-bold tracking-widest uppercase">
                  Frente · inglês
                </span>
                <button
                  type="button"
                  onClick={() => form.front && speak(form.front)}
                  className="text-muted-foreground hover:text-neon-cyan cursor-pointer"
                  aria-label="Ouvir frente"
                >
                  <Volume2 className="size-4" />
                </button>
              </div>
              <textarea
                ref={frontRef}
                value={form.front}
                onChange={(e) => setForm({ ...form, front: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === 'Tab' && !e.shiftKey) {
                    e.preventDefault()
                    flipTo('back')
                  }
                }}
                placeholder="Frase ou expressão... ex: I'll get back to you on that"
                aria-label="Frente do card"
                className="placeholder:text-muted-foreground/60 mt-3 flex-1 resize-none bg-transparent text-center text-xl leading-snug font-semibold outline-none sm:text-2xl"
              />
              <p className="text-muted-foreground text-center text-[11px]">
                Tab ↹ vira para o verso · Ctrl/⌘ + Enter salva
              </p>
            </div>

            {/* VERSO */}
            <div
              className={cn(
                faceBase,
                'rotate-y-180 from-neon-purple/15 via-card to-card border-neon-purple/40 bg-gradient-to-br',
              )}
              inert={side !== 'back'}
              aria-hidden={side !== 'back'}
            >
              <span className="text-neon-purple text-xs font-bold tracking-widest uppercase">
                Verso · significado
              </span>
              <textarea
                ref={backRef}
                value={form.back}
                onChange={(e) => setForm({ ...form, back: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === 'Tab' && e.shiftKey && e.currentTarget.selectionStart === 0) {
                    e.preventDefault()
                    flipTo('front')
                  }
                }}
                placeholder="Definição em inglês (ou tradução, se precisar)"
                aria-label="Verso do card"
                className="placeholder:text-muted-foreground/60 mt-3 min-h-0 flex-1 resize-none bg-transparent text-center text-lg leading-snug outline-none"
              />
              <Input
                value={form.example}
                onChange={(e) => setForm({ ...form, example: e.target.value })}
                placeholder="Exemplo: uma frase SUA usando a expressão (opcional)"
                aria-label="Exemplo"
                className="bg-background/50 italic"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="deck">Baralho (deck)</Label>
          <Input
            id="deck"
            list="deck-list"
            value={deck}
            onChange={(e) => setDeck(e.target.value)}
            placeholder={DEFAULT_DECK}
          />
          <datalist id="deck-list">
            {decks.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
          <p className="text-muted-foreground text-[11px]">
            Use "::" para sub-baralhos no Anki. Ex: English B2-C2::Trabalho
          </p>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
          <Input
            id="tags"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            placeholder="chunk, trabalho, semana_9"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="neon" size="lg" onClick={save} className="flex-1">
          <Save /> {editingId ? 'Salvar alterações' : 'Criar card'}
        </Button>
        {editingId ? (
          <Button variant="outline" size="lg" onClick={reset}>
            <X /> Cancelar edição
          </Button>
        ) : (
          <Button
            variant="outline"
            size="lg"
            onClick={reset}
            disabled={!form.front && !form.back && !form.example}
          >
            <Undo2 /> Limpar
          </Button>
        )}
      </div>
    </div>
  )
})
