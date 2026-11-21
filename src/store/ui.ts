import { create } from 'zustand'

export type AppTab = 'roadmap' | 'flashcards' | 'guide'

const readHash = (): AppTab => {
  const h = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : ''
  return h === 'flashcards' || h === 'guide' ? h : 'roadmap'
}

interface UiState {
  tab: AppTab
  openDayId: string | null
  /** card pré-preenchido vindo do vocabulário / dia */
  draft: { front: string; back: string; tags: string[] } | null
  setTab: (tab: AppTab) => void
  openDay: (id: string | null) => void
  setDraft: (draft: UiState['draft']) => void
}

export const useUi = create<UiState>((set) => ({
  tab: readHash(),
  openDayId: null,
  draft: null,
  setTab: (tab) => {
    if (typeof window !== 'undefined') history.replaceState(null, '', `#${tab}`)
    set({ tab })
  },
  openDay: (id) => set({ openDayId: id }),
  setDraft: (draft) => set({ draft }),
}))
