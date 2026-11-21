import { createJSONStorage, type StateStorage } from 'zustand/middleware'

/** localStorage protegido: em modo privado/iframes bloqueados, cai para memória sem quebrar o app. */
const memory = new Map<string, string>()

const safeStorage: StateStorage = {
  getItem: (name) => {
    try {
      return window.localStorage.getItem(name)
    } catch {
      return memory.get(name) ?? null
    }
  },
  setItem: (name, value) => {
    try {
      window.localStorage.setItem(name, value)
    } catch {
      memory.set(name, value)
    }
  },
  removeItem: (name) => {
    try {
      window.localStorage.removeItem(name)
    } catch {
      memory.delete(name)
    }
  },
}

export const persistStorage = createJSONStorage(() => safeStorage)
