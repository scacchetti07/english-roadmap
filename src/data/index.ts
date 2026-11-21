import { parseVocab } from '@/lib/vocab'
import { buildDays } from './schedule'
import type { Week, WeekSource } from './types'
import { week01 } from './weeks/week01'
import { week02 } from './weeks/week02'
import { week03 } from './weeks/week03'
import { week04 } from './weeks/week04'
import { week05 } from './weeks/week05'
import { week06 } from './weeks/week06'
import { week07 } from './weeks/week07'
import { week08 } from './weeks/week08'
import { week09 } from './weeks/week09'
import { week10 } from './weeks/week10'
import { week11 } from './weeks/week11'
import { week12 } from './weeks/week12'

const SOURCES: WeekSource[] = [
  week01,
  week02,
  week03,
  week04,
  week05,
  week06,
  week07,
  week08,
  week09,
  week10,
  week11,
  week12,
]

function phaseOf(n: number) {
  return n <= 8 ? 'Fase 1 · Setup e fundação' : 'Fase 2 · Volume e fala'
}

export const WEEKS: Week[] = SOURCES.map(({ vocabRaw, ...source }) => {
  const vocab = parseVocab(vocabRaw, source.number)
  return {
    ...source,
    id: `w${source.number}`,
    phase: phaseOf(source.number),
    vocab,
    days: buildDays({ ...source, vocabRaw }, vocab),
  }
})

export const ALL_DAYS = WEEKS.flatMap((w) => w.days)
export const TOTAL_DAYS = ALL_DAYS.length
export const TOTAL_VOCAB = WEEKS.reduce((n, w) => n + w.vocab.length, 0)

export * from './types'
