import { useCallback } from 'react'
import { toast } from 'sonner'
import { WEEKS, type Day, type VocabItem } from '@/data'
import { TAG_LABEL } from '@/lib/vocab'
import { celebrate } from '@/lib/celebrate'
import { DEFAULT_DECK, useFlashcards } from '@/store/flashcards'
import { useProgress } from '@/store/progress'

export const deckForWeek = (n: number) =>
  `${DEFAULT_DECK}::Semana ${String(n).padStart(2, '0')} · ${WEEKS[n - 1]?.theme ?? ''}`.trim()

export function vocabToCard(item: VocabItem, weekNumber: number) {
  return {
    front: item.term,
    back: item.meaning,
    deck: deckForWeek(weekNumber),
    tags: [`semana_${weekNumber}`, TAG_LABEL[item.tag].toLowerCase().replace(/\s+/g, '_')],
  }
}

export function useDayActions() {
  const setDayDone = useProgress((s) => s.setDayDone)
  const addMany = useFlashcards((s) => s.addMany)

  const setDone = useCallback(
    (day: Day, done: boolean) => {
      setDayDone(day.id, done)
      if (!done) return
      const { completedDays } = useProgress.getState()
      const week = WEEKS[day.weekNumber - 1]
      const weekDone = week.days.every((d) => d.id in completedDays)
      if (weekDone) {
        void celebrate(true)
        toast.success(`Semana ${week.number} concluída! ${week.emoji}`, {
          description: 'Grave o monólogo de domingo e compare com o da semana passada.',
        })
      } else {
        void celebrate(false)
        toast.success(`${day.weekday} concluído ✔`, {
          description: 'Mais um dia no caminho. Consistência > intensidade.',
        })
      }
    },
    [setDayDone],
  )

  const addVocab = useCallback(
    (items: VocabItem[], weekNumber: number) => {
      const added = addMany(items.map((i) => vocabToCard(i, weekNumber)))
      if (added)
        toast.success(
          `${added} flashcard${added > 1 ? 's' : ''} adicionado${added > 1 ? 's' : ''}`,
          { description: 'Exporte para o Anki na aba Flashcards.' },
        )
      else toast('Esses cards já estão no seu baralho')
      return added
    },
    [addMany],
  )

  return { setDone, addVocab }
}
