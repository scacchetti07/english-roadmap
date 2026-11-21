import { useMemo } from 'react'
import { ALL_DAYS, TOTAL_DAYS, WEEKS } from '@/data'
import { computeStreak } from '@/lib/dates'
import { useProgress } from '@/store/progress'

export function useRoadmapStats() {
  const completedDays = useProgress((s) => s.completedDays)

  return useMemo(() => {
    const doneCount = ALL_DAYS.filter((d) => d.id in completedDays).length
    const percent = Math.round((doneCount / TOTAL_DAYS) * 100)
    const perWeek = WEEKS.map((w) => {
      const done = w.days.filter((d) => d.id in completedDays).length
      return {
        number: w.number,
        done,
        total: w.days.length,
        percent: Math.round((done / w.days.length) * 100),
      }
    })
    const nextDay = ALL_DAYS.find((d) => !(d.id in completedDays))
    const streak = computeStreak(Object.values(completedDays))
    return { doneCount, total: TOTAL_DAYS, percent, perWeek, nextDay, streak }
  }, [completedDays])
}
