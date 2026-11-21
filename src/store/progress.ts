import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { todayKey } from '@/lib/dates'
import { persistStorage } from '@/lib/storage'

interface ProgressState {
  /** dayId → data (yyyy-mm-dd) em que foi concluído */
  completedDays: Record<string, string>
  completedTasks: Record<string, true>
  knownVocab: Record<string, true>
  setupChecks: Record<string, true>
  activeWeek: number
  theme: 'dark' | 'light'
  toggleDay: (dayId: string) => void
  setDayDone: (dayId: string, done: boolean) => void
  toggleTask: (taskId: string) => void
  toggleKnown: (vocabId: string) => void
  toggleSetup: (key: string) => void
  setActiveWeek: (n: number) => void
  toggleTheme: () => void
  importState: (data: Partial<ProgressState>) => void
  reset: () => void
}

const initial = {
  completedDays: {},
  completedTasks: {},
  knownVocab: {},
  setupChecks: {},
  activeWeek: 1,
  theme: 'dark' as const,
}

const toggleKey = <T extends Record<string, unknown>>(map: T, key: string, value: unknown): T => {
  const next = { ...map } as Record<string, unknown>
  if (key in next) delete next[key]
  else next[key] = value
  return next as T
}

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      ...initial,
      toggleDay: (dayId) =>
        set((s) => ({ completedDays: toggleKey(s.completedDays, dayId, todayKey()) })),
      setDayDone: (dayId, done) =>
        set((s) => {
          const next = { ...s.completedDays }
          if (done) next[dayId] = next[dayId] ?? todayKey()
          else delete next[dayId]
          return { completedDays: next }
        }),
      toggleTask: (taskId) =>
        set((s) => ({ completedTasks: toggleKey(s.completedTasks, taskId, true) })),
      toggleKnown: (vocabId) =>
        set((s) => ({ knownVocab: toggleKey(s.knownVocab, vocabId, true) })),
      toggleSetup: (key) => set((s) => ({ setupChecks: toggleKey(s.setupChecks, key, true) })),
      setActiveWeek: (n) => set({ activeWeek: n }),
      toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
      importState: (data) =>
        set((s) => ({
          completedDays: data.completedDays ?? s.completedDays,
          completedTasks: data.completedTasks ?? s.completedTasks,
          knownVocab: data.knownVocab ?? s.knownVocab,
          setupChecks: data.setupChecks ?? s.setupChecks,
        })),
      reset: () => set({ ...initial }),
    }),
    { name: 'english-roadmap:progress', version: 1, storage: persistStorage },
  ),
)
