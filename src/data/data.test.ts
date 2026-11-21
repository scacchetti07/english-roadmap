import { describe, expect, it } from 'vitest'
import { ALL_DAYS, TOTAL_DAYS, WEEKS } from './index'
import { totalMinutes } from './schedule'

describe('roadmap data', () => {
  it('has 12 weeks with 7 days each', () => {
    expect(WEEKS).toHaveLength(12)
    expect(TOTAL_DAYS).toBe(84)
  })

  it.each(WEEKS.map((w) => [w.number, w] as const))(
    'week %i has 70–100 vocabulary items',
    (_, week) => {
      expect(week.vocab.length).toBeGreaterThanOrEqual(70)
      expect(week.vocab.length).toBeLessThanOrEqual(100)
      for (const v of week.vocab) {
        expect(v.term).not.toBe('')
        expect(v.meaning).not.toBe('')
      }
    },
  )

  it('every day is exactly 30 active minutes', () => {
    for (const day of ALL_DAYS) expect(totalMinutes(day)).toBe(30)
  })

  it('ids are unique', () => {
    const ids = ALL_DAYS.flatMap((d) => [d.id, ...d.tasks.map((t) => t.id)])
    expect(new Set(ids).size).toBe(ids.length)
    const vocabIds = WEEKS.flatMap((w) => w.vocab.map((v) => v.id))
    expect(new Set(vocabIds).size).toBe(vocabIds.length)
  })

  it('distributes all vocabulary across Monday–Saturday', () => {
    for (const w of WEEKS) {
      const assigned = w.days.reduce((n, d) => n + d.vocab.length, 0)
      expect(assigned).toBe(w.vocab.length)
    }
  })
})
