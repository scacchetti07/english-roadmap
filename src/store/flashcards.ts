import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { persistStorage } from '@/lib/storage'
import { uid } from '@/lib/utils'

export interface Flashcard {
  id: string
  front: string
  back: string
  example: string
  deck: string
  tags: string[]
  createdAt: number
  /** contagem simples da sessão de revisão rápida dentro do app */
  reviews: { good: number; again: number }
}

export type NewCard = Pick<Flashcard, 'front' | 'back'> &
  Partial<Pick<Flashcard, 'example' | 'deck' | 'tags'>>

export const DEFAULT_DECK = 'English B2-C2'

interface FlashcardState {
  cards: Flashcard[]
  add: (card: NewCard) => Flashcard | null
  addMany: (cards: NewCard[]) => number
  update: (id: string, patch: Partial<Omit<Flashcard, 'id'>>) => void
  remove: (id: string) => void
  review: (id: string, result: 'good' | 'again') => void
  importCards: (cards: Flashcard[]) => number
  clear: () => void
}

const norm = (s: string) => s.trim().toLowerCase()

function build(card: NewCard): Flashcard {
  return {
    id: uid(),
    front: card.front.trim(),
    back: card.back.trim(),
    example: card.example?.trim() ?? '',
    deck: card.deck?.trim() || DEFAULT_DECK,
    tags: (card.tags ?? []).map((t) => t.trim()).filter(Boolean),
    createdAt: Date.now(),
    reviews: { good: 0, again: 0 },
  }
}

export const useFlashcards = create<FlashcardState>()(
  persist(
    (set, get) => ({
      cards: [],
      add: (card) => {
        if (!card.front.trim() || !card.back.trim()) return null
        const exists = get().cards.some(
          (c) =>
            norm(c.front) === norm(card.front) && c.deck === (card.deck?.trim() || DEFAULT_DECK),
        )
        if (exists) return null
        const created = build(card)
        set((s) => ({ cards: [created, ...s.cards] }))
        return created
      },
      addMany: (cards) => {
        const existing = new Set(get().cards.map((c) => `${c.deck}::${norm(c.front)}`))
        const fresh = cards
          .filter((c) => c.front.trim() && c.back.trim())
          .filter((c) => {
            const key = `${c.deck?.trim() || DEFAULT_DECK}::${norm(c.front)}`
            if (existing.has(key)) return false
            existing.add(key)
            return true
          })
          .map(build)
        if (fresh.length) set((s) => ({ cards: [...fresh, ...s.cards] }))
        return fresh.length
      },
      update: (id, patch) =>
        set((s) => ({ cards: s.cards.map((c) => (c.id === id ? { ...c, ...patch } : c)) })),
      remove: (id) => set((s) => ({ cards: s.cards.filter((c) => c.id !== id) })),
      review: (id, result) =>
        set((s) => ({
          cards: s.cards.map((c) =>
            c.id === id ? { ...c, reviews: { ...c.reviews, [result]: c.reviews[result] + 1 } } : c,
          ),
        })),
      importCards: (incoming) => {
        const ids = new Set(get().cards.map((c) => c.id))
        const fresh = incoming.filter((c) => c && typeof c.front === 'string' && !ids.has(c.id))
        set((s) => ({ cards: [...fresh, ...s.cards] }))
        return fresh.length
      },
      clear: () => set({ cards: [] }),
    }),
    { name: 'english-roadmap:flashcards', version: 1, storage: persistStorage },
  ),
)
