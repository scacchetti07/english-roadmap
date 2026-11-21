export const todayKey = (d = new Date()) => {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/** Dias seguidos (até hoje ou ontem) com pelo menos um dia de estudo concluído. */
export function computeStreak(dates: string[], now = new Date()) {
  const set = new Set(dates)
  const cursor = new Date(now)
  if (!set.has(todayKey(cursor))) cursor.setDate(cursor.getDate() - 1)
  let streak = 0
  while (set.has(todayKey(cursor))) {
    streak++
    cursor.setDate(cursor.getDate() - 1)
  }
  return streak
}
