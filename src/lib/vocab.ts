import type { VocabItem, VocabTag } from '@/data/types'

const TAGS: Record<string, VocabTag> = {
  w: 'word',
  pv: 'phrasal',
  ch: 'chunk',
  id: 'idiom',
  sl: 'slang',
}

export const TAG_LABEL: Record<VocabTag, string> = {
  word: 'Palavra',
  phrasal: 'Phrasal verb',
  chunk: 'Chunk',
  idiom: 'Idiom',
  slang: 'Informal',
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/**
 * Converte o bloco de texto "termo | significado | tag" em itens tipados.
 * Linhas vazias e comentários (#) são ignorados.
 */
export function parseVocab(raw: string, weekNumber: number): VocabItem[] {
  const seen = new Set<string>()
  return raw
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => {
      const [term = '', meaning = '', tag = 'w'] = line.split('|').map((part) => part.trim())
      let id = `w${weekNumber}-${slugify(term)}`
      while (seen.has(id)) id += '-x'
      seen.add(id)
      return { id, term, meaning, tag: TAGS[tag] ?? 'word' }
    })
    .filter((item) => item.term.length > 0)
}
