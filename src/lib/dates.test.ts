import { describe, expect, it } from 'vitest'
import { computeStreak } from './dates'

describe('computeStreak', () => {
  const now = new Date(2026, 10, 20)
  it('counts consecutive days ending today', () => {
    expect(computeStreak(['2026-11-20', '2026-11-19', '2026-11-18', '2026-11-15'], now)).toBe(3)
  })
  it('keeps the streak alive if today is not done yet', () => {
    expect(computeStreak(['2026-11-19', '2026-11-18'], now)).toBe(2)
  })
  it('is zero when the chain is broken', () => {
    expect(computeStreak(['2026-11-17'], now)).toBe(0)
  })
})
