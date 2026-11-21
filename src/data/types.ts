export type VocabTag = 'word' | 'phrasal' | 'chunk' | 'idiom' | 'slang'

export interface VocabItem {
  id: string
  term: string
  meaning: string
  tag: VocabTag
}

export type ResourceKind =
  'youtube' | 'podcast' | 'site' | 'tool' | 'game' | 'series' | 'comic' | 'music' | 'reading'

export interface Resource {
  name: string
  url: string
  kind: ResourceKind
  note: string
}

export interface ContentItem {
  title: string
  kind: ResourceKind
  detail: string
  url?: string
}

export interface Grammar {
  topic: string
  summary: string
  rules: string[]
  examples: { en: string; note?: string }[]
  mistakes: { wrong: string; right: string }[]
  practice: string
}

/** O que muda de semana para semana dentro do molde fixo de 7 dias. */
export interface WeekPlan {
  shadowing: { clip: string; resource: string; url?: string }
  roleplayWork: string
  reading: { what: string; resource: string; url?: string }
  writingPrompt: string
  interaction: { what: string; resource: string }
  roleplaySocial: string
  chorusing: string[]
  game: { title: string; prompt: string }
  monologue: string
}

export interface WeekSource {
  number: number
  theme: string
  subtitle: string
  emoji: string
  interestHook: string
  goal: string
  grammar: Grammar
  /** Linhas no formato "termo | significado | tag" (tag: w, pv, ch, id, sl) */
  vocabRaw: string
  resources: Resource[]
  contents: ContentItem[]
  dailyChallenge: string
  plan: WeekPlan
}

export interface Task {
  id: string
  label: string
  resource: string
  url?: string
  minutes: number
  how: string
  kind: 'vocab' | 'speaking' | 'listening' | 'reading' | 'writing' | 'review'
}

export interface Day {
  id: string
  weekNumber: number
  index: number
  weekday: string
  weekdayShort: string
  title: string
  focus: string
  tasks: Task[]
  passive: string
  vocab: VocabItem[]
}

export interface Week extends Omit<WeekSource, 'vocabRaw'> {
  id: string
  phase: string
  vocab: VocabItem[]
  days: Day[]
}
