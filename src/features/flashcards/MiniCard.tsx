import { useState } from 'react'
import { Pencil, Trash2, Volume2 } from 'lucide-react'
import { speak } from '@/lib/speech'
import { cn } from '@/lib/utils'
import type { Flashcard } from '@/store/flashcards'

export function MiniCard({
  card,
  onEdit,
  onDelete,
}: {
  card: Flashcard
  onEdit: () => void
  onDelete: () => void
}) {
  const [flipped, setFlipped] = useState(false)
  const shortDeck = card.deck.split('::').at(-1)

  const actions = (
    <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        onClick={() => speak(card.front)}
        className="hover:bg-accent grid size-7 cursor-pointer place-items-center rounded-md"
        aria-label="Ouvir"
      >
        <Volume2 className="size-3.5" />
      </button>
      <button
        type="button"
        onClick={onEdit}
        className="hover:bg-accent grid size-7 cursor-pointer place-items-center rounded-md"
        aria-label="Editar card"
      >
        <Pencil className="size-3.5" />
      </button>
      <button
        type="button"
        onClick={onDelete}
        className="hover:bg-destructive/15 hover:text-destructive grid size-7 cursor-pointer place-items-center rounded-md"
        aria-label="Excluir card"
      >
        <Trash2 className="size-3.5" />
      </button>
    </div>
  )

  return (
    <div className="perspective-1000 h-44">
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`Card: ${card.front}. Clique para virar`}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setFlipped((f) => !f)
          }
        }}
        className={cn(
          'preserve-3d focus-visible:ring-ring/50 relative h-full cursor-pointer rounded-xl transition-transform duration-500 outline-none focus-visible:ring-[3px] motion-reduce:transition-none',
          flipped && 'rotate-y-180',
        )}
      >
        <div className="backface-hidden bg-card hover:border-neon-cyan/50 absolute inset-0 flex flex-col rounded-xl border p-4">
          <div className="text-muted-foreground flex items-center justify-between text-[10px] tracking-wider uppercase">
            <span className="truncate">{shortDeck}</span>
            {actions}
          </div>
          <div className="flex flex-1 items-center justify-center text-center font-semibold">
            {card.front}
          </div>
          {card.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {card.tags.slice(0, 3).map((t) => (
                <span key={t} className="bg-muted rounded px-1.5 py-px text-[10px]">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="backface-hidden rotate-y-180 bg-neon-purple/10 border-neon-purple/40 absolute inset-0 flex flex-col rounded-xl border p-4">
          <div className="text-neon-purple flex items-center justify-between text-[10px] tracking-wider uppercase">
            <span>Verso</span>
            {actions}
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-2 overflow-hidden text-center text-sm">
            <span>{card.back}</span>
            {card.example && (
              <span className="text-muted-foreground text-xs italic">"{card.example}"</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
