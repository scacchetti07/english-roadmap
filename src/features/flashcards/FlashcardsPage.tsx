import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { GraduationCap, Layers, Search, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useFlashcards } from '@/store/flashcards'
import { ExportPanel } from './ExportPanel'
import { FlipCardEditor, type FlipCardEditorHandle } from './FlipCardEditor'
import { MiniCard } from './MiniCard'
import { StudyDialog } from './StudyDialog'

export function FlashcardsPage() {
  const cards = useFlashcards((s) => s.cards)
  const remove = useFlashcards((s) => s.remove)
  const add = useFlashcards((s) => s.add)
  const clear = useFlashcards((s) => s.clear)
  const editorRef = useRef<FlipCardEditorHandle>(null)
  const [query, setQuery] = useState('')
  const [deck, setDeck] = useState('all')
  const [studyOpen, setStudyOpen] = useState(false)
  const [confirmClear, setConfirmClear] = useState(false)

  const decks = useMemo(() => Array.from(new Set(cards.map((c) => c.deck))).sort(), [cards])
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return cards.filter(
      (c) =>
        (deck === 'all' || c.deck === deck) &&
        (!q ||
          c.front.toLowerCase().includes(q) ||
          c.back.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))),
    )
  }, [cards, deck, query])

  const onDelete = (id: string) => {
    const card = cards.find((c) => c.id === id)
    remove(id)
    if (card)
      toast('Card excluído', {
        action: { label: 'Desfazer', onClick: () => add(card) },
      })
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Criar flashcard</CardTitle>
            <CardDescription>
              Escreva a frente, aperte Tab e o card gira para você escrever o verso. Priorize frases
              e chunks, não palavras soltas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FlipCardEditor ref={editorRef} />
          </CardContent>
        </Card>
        <div className="space-y-6">
          <ExportPanel />
          <Card className="gap-3">
            <CardHeader>
              <CardTitle className="text-sm">Boas práticas de cards</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-1.5 text-xs">
              <p>• Frente: a frase real onde você viu a expressão, com o alvo em destaque.</p>
              <p>• Verso: definição em inglês + uma frase SUA.</p>
              <p>
                • Para fala: crie também cards reversos ("Como digo educadamente que vou responder
                depois?").
              </p>
              <p>• Máximo de 5–10 cards novos por dia.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="space-y-4" aria-labelledby="my-cards">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 id="my-cards" className="flex items-center gap-2 text-xl font-semibold">
            <Layers className="text-neon-cyan size-5" /> Meus cards
            <span className="text-muted-foreground text-sm font-normal">({filtered.length})</span>
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setStudyOpen(true)}
              disabled={!filtered.length}
            >
              <GraduationCap /> Revisar {filtered.length > 0 && `(${filtered.length})`}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setConfirmClear(true)}
              disabled={!cards.length}
              aria-label="Apagar todos os cards"
            >
              <Trash2 />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por frente, verso ou tag..."
              className="pl-9"
              aria-label="Buscar cards"
            />
          </div>
          <select
            value={deck}
            onChange={(e) => setDeck(e.target.value)}
            aria-label="Filtrar por baralho"
            className="border-input dark:bg-input/30 focus-visible:ring-ring/50 h-9 rounded-md border bg-transparent px-3 text-sm outline-none focus-visible:ring-[3px] sm:w-72"
          >
            <option value="all">Todos os baralhos</option>
            {decks.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {cards.length === 0 ? (
          <div className="text-muted-foreground rounded-xl border border-dashed p-10 text-center text-sm">
            Nenhum card ainda. Crie o primeiro acima ou use o botão{' '}
            <span className="text-foreground font-medium">+</span> no vocabulário de qualquer
            semana.
          </div>
        ) : (
          <motion.div layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence initial={false}>
              {filtered.map((c) => (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <MiniCard
                    card={c}
                    onEdit={() => editorRef.current?.edit(c)}
                    onDelete={() => onDelete(c.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      <StudyDialog open={studyOpen} onOpenChange={setStudyOpen} cards={filtered} />

      <Dialog open={confirmClear} onOpenChange={setConfirmClear}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apagar todos os {cards.length} cards?</DialogTitle>
            <DialogDescription>
              Exporte para o Anki ou faça um backup antes. Essa ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={() => {
                clear()
                setConfirmClear(false)
              }}
            >
              Apagar tudo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
