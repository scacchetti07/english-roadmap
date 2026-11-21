import { useCallback, useEffect, useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { Check, RotateCcw, Shuffle, Volume2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { speak } from '@/lib/speech'
import { useFlashcards, type Flashcard } from '@/store/flashcards'

function shuffle<T>(arr: T[]) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function StudyDialog({
  open,
  onOpenChange,
  cards,
}: {
  open: boolean
  onOpenChange: (o: boolean) => void
  cards: Flashcard[]
}) {
  const review = useFlashcards((s) => s.review)
  const reducedMotion = useReducedMotion()
  const [seed, setSeed] = useState(0)
  const queue = useMemo(() => (open ? shuffle(cards) : []), [open, cards, seed]) // eslint-disable-line react-hooks/exhaustive-deps
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [score, setScore] = useState({ good: 0, again: 0 })
  const card = queue[i]
  const finished = open && i >= queue.length && queue.length > 0

  const restart = useCallback(() => {
    setSeed((s) => s + 1)
    setI(0)
    setFlipped(false)
    setScore({ good: 0, again: 0 })
  }, [])

  const answer = useCallback(
    (result: 'good' | 'again') => {
      if (!card) return
      review(card.id, result)
      setScore((s) => ({ ...s, [result]: s[result] + 1 }))
      setFlipped(false)
      setI((n) => n + 1)
    },
    [card, review],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        e.preventDefault()
        setFlipped((f) => !f)
      } else if (flipped && e.key === '1') answer('again')
      else if (flipped && e.key === '2') answer('good')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, flipped, answer])

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        onOpenChange(o)
        if (!o) restart()
      }}
    >
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Revisão rápida</DialogTitle>
          <DialogDescription>
            Espaço vira o card · 1 = errei · 2 = acertei. Para repetição espaçada de verdade, use o
            Anki.
          </DialogDescription>
        </DialogHeader>

        {finished ? (
          <div className="space-y-4 py-6 text-center">
            <div className="text-5xl">🎯</div>
            <p className="text-lg font-semibold">Sessão concluída!</p>
            <p className="text-muted-foreground text-sm">
              Acertou {score.good} · Errou {score.again}
            </p>
            <Button onClick={restart} variant="neon">
              <RotateCcw /> Revisar de novo
            </Button>
          </div>
        ) : card ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Progress value={(i / queue.length) * 100} />
              <span className="text-muted-foreground text-xs tabular-nums">
                {i + 1}/{queue.length}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={restart}
                aria-label="Embaralhar e recomeçar"
              >
                <Shuffle />
              </Button>
            </div>
            <div className="perspective-1000">
              <motion.div
                className="preserve-3d relative h-64 cursor-pointer"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={
                  reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 140, damping: 18 }
                }
                onClick={() => setFlipped((f) => !f)}
              >
                <div className="backface-hidden from-neon-cyan/15 to-card border-neon-cyan/40 absolute inset-0 flex flex-col items-center justify-center rounded-2xl border bg-gradient-to-br p-6 text-center">
                  <span className="text-2xl font-semibold">{card.front}</span>
                  <span className="text-muted-foreground mt-4 text-xs">
                    clique ou espaço para virar
                  </span>
                </div>
                <div className="backface-hidden rotate-y-180 from-neon-purple/15 to-card border-neon-purple/40 absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border bg-gradient-to-br p-6 text-center">
                  <span className="text-lg">{card.back}</span>
                  {card.example && (
                    <span className="text-muted-foreground text-sm italic">"{card.example}"</span>
                  )}
                </div>
              </motion.div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => speak(card.front)}
                aria-label="Ouvir"
              >
                <Volume2 />
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                disabled={!flipped}
                onClick={() => answer('again')}
              >
                <X /> Errei (1)
              </Button>
              <Button
                className="bg-success hover:bg-success/90 flex-1 text-black"
                disabled={!flipped}
                onClick={() => answer('good')}
              >
                <Check /> Acertei (2)
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground py-8 text-center text-sm">
            Nenhum card para revisar.
          </p>
        )}
      </DialogContent>
    </Dialog>
  )
}
