import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, Plus, Search, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import type { VocabTag, Week } from '@/data'
import { speak } from '@/lib/speech'
import { cn } from '@/lib/utils'
import { TAG_LABEL } from '@/lib/vocab'
import { useFlashcards } from '@/store/flashcards'
import { useProgress } from '@/store/progress'
import { useDayActions } from './useDayActions'

const TAG_STYLE: Record<VocabTag, string> = {
  word: 'bg-secondary text-secondary-foreground',
  phrasal: 'bg-neon-cyan/15 text-neon-cyan',
  chunk: 'bg-neon-purple/15 text-neon-purple',
  idiom: 'bg-amber-500/15 text-amber-400',
  slang: 'bg-pink-500/15 text-pink-400',
}

export function VocabPanel({ week }: { week: Week }) {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<VocabTag | 'all'>('all')
  const [hideKnown, setHideKnown] = useState(false)
  const knownVocab = useProgress((s) => s.knownVocab)
  const toggleKnown = useProgress((s) => s.toggleKnown)
  const cards = useFlashcards((s) => s.cards)
  const { addVocab } = useDayActions()

  const inDeck = useMemo(() => new Set(cards.map((c) => c.front.trim().toLowerCase())), [cards])
  const knownCount = week.vocab.filter((v) => v.id in knownVocab).length
  const counts = useMemo(() => {
    const c: Partial<Record<VocabTag, number>> = {}
    week.vocab.forEach((v) => (c[v.tag] = (c[v.tag] ?? 0) + 1))
    return c
  }, [week.vocab])

  const filtered = week.vocab.filter((v) => {
    if (tag !== 'all' && v.tag !== tag) return false
    if (hideKnown && v.id in knownVocab) return false
    const q = query.trim().toLowerCase()
    return !q || v.term.toLowerCase().includes(q) || v.meaning.toLowerCase().includes(q)
  })

  return (
    <div className="space-y-4">
      <div className="bg-card flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">
              {knownCount}/{week.vocab.length} dominados
            </span>
            <span className="text-muted-foreground text-xs">
              Marque ✔ quando conseguir USAR a expressão numa frase falada
            </span>
          </div>
          <Progress
            value={(knownCount / week.vocab.length) * 100}
            className="mt-2"
            indicatorClassName="bg-neon-purple"
          />
        </div>
        <Button
          variant="neon"
          onClick={() => addVocab(filtered, week.number)}
          disabled={!filtered.length}
        >
          <Plus /> {filtered.length} para flashcards
        </Button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar termo ou significado..."
            className="pl-9"
            aria-label="Buscar vocabulário"
          />
        </div>
        <label className="text-muted-foreground flex cursor-pointer items-center gap-2 text-sm select-none">
          <input
            type="checkbox"
            checked={hideKnown}
            onChange={(e) => setHideKnown(e.target.checked)}
            className="accent-primary"
          />
          Esconder dominados
        </label>
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo">
        {(['all', 'word', 'phrasal', 'chunk', 'idiom', 'slang'] as const).map((t) => {
          const n = t === 'all' ? week.vocab.length : (counts[t] ?? 0)
          if (!n) return null
          return (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              aria-pressed={tag === t}
              className={cn(
                'cursor-pointer rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                tag === t ? 'border-primary bg-primary text-primary-foreground' : 'hover:bg-accent',
              )}
            >
              {t === 'all' ? 'Todos' : TAG_LABEL[t]} · {n}
            </button>
          )
        })}
      </div>

      <motion.div layout className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence initial={false}>
          {filtered.map((v) => {
            const known = v.id in knownVocab
            const added = inDeck.has(v.term.trim().toLowerCase())
            return (
              <motion.div
                key={v.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  'bg-card flex items-start gap-3 rounded-xl border p-3',
                  known && 'border-success/40 bg-success/5',
                )}
              >
                <button
                  type="button"
                  onClick={() => speak(v.term)}
                  className="text-muted-foreground hover:text-neon-cyan mt-0.5 cursor-pointer"
                  aria-label={`Ouvir ${v.term}`}
                >
                  <Volume2 className="size-4" />
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="font-medium">{v.term}</span>
                    <span
                      className={cn(
                        'rounded px-1.5 py-px text-[10px] font-medium',
                        TAG_STYLE[v.tag],
                      )}
                    >
                      {TAG_LABEL[v.tag]}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">{v.meaning}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => toggleKnown(v.id)}
                    aria-pressed={known}
                    aria-label={
                      known ? `Desmarcar ${v.term} como dominado` : `Marcar ${v.term} como dominado`
                    }
                    className={cn(
                      'grid size-7 cursor-pointer place-items-center rounded-md border transition-colors',
                      known ? 'bg-success border-success text-background' : 'hover:bg-accent',
                    )}
                  >
                    <Check className="size-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => addVocab([v], week.number)}
                    disabled={added}
                    aria-label={
                      added ? `${v.term} já está nos flashcards` : `Criar flashcard de ${v.term}`
                    }
                    className="hover:bg-accent grid size-7 cursor-pointer place-items-center rounded-md border transition-colors disabled:cursor-default disabled:opacity-40"
                  >
                    <Plus className="size-3.5" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
      {!filtered.length && (
        <p className="text-muted-foreground py-8 text-center text-sm">
          Nada encontrado com esse filtro.
        </p>
      )}
    </div>
  )
}
