import { lazy, Suspense } from 'react'
import { motion } from 'motion/react'
import { BookOpenCheck, CalendarCheck, Flame, Layers, PlayCircle, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { TOTAL_VOCAB, WEEKS } from '@/data'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useRoadmapStats } from '@/hooks/useRoadmapStats'
import { useFlashcards } from '@/store/flashcards'
import { useProgress } from '@/store/progress'
import { useUi } from '@/store/ui'
import { AnimatedNumber } from './AnimatedNumber'
import { TopBar } from './TopBar'

const ProgressGlobe = lazy(() => import('@/features/globe/ProgressGlobe'))

function Stat({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: typeof Flame
  label: string
  value: React.ReactNode
  accent: string
}) {
  return (
    <div className="bg-card/60 flex items-center gap-3 rounded-xl border px-3 py-2.5 backdrop-blur">
      <div className={`grid size-9 place-items-center rounded-lg ${accent}`}>
        <Icon className="size-4.5" />
      </div>
      <div className="min-w-0">
        <div className="text-muted-foreground truncate text-[11px] tracking-wide uppercase">
          {label}
        </div>
        <div className="text-base leading-tight font-semibold">{value}</div>
      </div>
    </div>
  )
}

export function ProgressHeader() {
  const stats = useRoadmapStats()
  const reducedMotion = useReducedMotion()
  const cardCount = useFlashcards((s) => s.cards.length)
  const known = useProgress((s) => Object.keys(s.knownVocab).length)
  const setActiveWeek = useProgress((s) => s.setActiveWeek)
  const { openDay, setTab } = useUi()
  const next = stats.nextDay
  const nextWeek = next ? WEEKS[next.weekNumber - 1] : undefined

  const continueStudy = () => {
    if (!next) return
    setTab('roadmap')
    setActiveWeek(next.weekNumber)
    openDay(next.id)
  }

  return (
    <header className="bg-grid relative overflow-hidden border-b">
      <div className="from-neon-purple/15 via-background to-neon-cyan/10 pointer-events-none absolute inset-0 bg-gradient-to-br" />
      <div className="relative mx-auto max-w-7xl px-4 pt-4 pb-8 sm:px-6">
        <div className="flex items-center justify-between">
          <Badge variant="purple" className="gap-1.5">
            <Target /> B2 → C2 · Ciclo 1 · 12 semanas
          </Badge>
          <TopBar />
        </div>

        <div className="mt-4 grid items-center gap-6 lg:grid-cols-[1fr_380px]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              English <span className="text-gradient">Roadmap</span>
            </motion.h1>
            <p className="text-muted-foreground mt-1 max-w-xl text-sm sm:text-base">
              30 minutos ativos por dia, imersão nos tempos mortos e muito input do que você ama.
              Rumo ao Canadá 🇨🇦 ou ao Reino Unido 🇬🇧.
            </p>

            <div className="mt-6" aria-live="polite">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="text-muted-foreground text-xs tracking-wider uppercase">
                    Progresso geral
                  </div>
                  <div className="text-gradient text-5xl font-black tabular-nums sm:text-6xl">
                    <AnimatedNumber value={stats.percent} suffix="%" />
                  </div>
                </div>
                {next ? (
                  <Button variant="neon" size="lg" onClick={continueStudy} className="shrink-0">
                    <PlayCircle />
                    <span className="hidden sm:inline">Continuar:</span> Sem. {next.weekNumber} ·{' '}
                    {next.weekdayShort}
                  </Button>
                ) : (
                  <Badge variant="success" className="text-sm">
                    Ciclo completo! 🎉
                  </Badge>
                )}
              </div>
              <Progress
                value={stats.percent}
                className="mt-3 h-3"
                indicatorClassName="bg-gradient-to-r from-neon-cyan to-neon-purple"
                aria-label="Progresso geral do roteiro"
              />
              {nextWeek && next && (
                <p className="text-muted-foreground mt-2 text-xs">
                  Próximo:{' '}
                  <span className="text-foreground font-medium">
                    {nextWeek.emoji} {nextWeek.theme}
                  </span>{' '}
                  · {next.weekday}: {next.title}
                </p>
              )}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Stat
                icon={CalendarCheck}
                label="Dias concluídos"
                value={`${stats.doneCount}/${stats.total}`}
                accent="bg-success/15 text-success"
              />
              <Stat
                icon={Flame}
                label="Sequência"
                value={`${stats.streak} ${stats.streak === 1 ? 'dia' : 'dias'}`}
                accent="bg-orange-500/15 text-orange-400"
              />
              <Stat
                icon={Layers}
                label="Flashcards"
                value={cardCount}
                accent="bg-neon-cyan/15 text-neon-cyan"
              />
              <Stat
                icon={BookOpenCheck}
                label="Vocab dominado"
                value={`${known}/${TOTAL_VOCAB}`}
                accent="bg-neon-purple/15 text-neon-purple"
              />
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[380px]">
            <div
              className="bg-neon-purple/20 pointer-events-none absolute inset-[12%] rounded-full blur-3xl"
              aria-hidden
            />
            <Suspense
              fallback={
                <div className="from-neon-purple/30 to-neon-cyan/10 m-auto mt-[15%] size-[70%] animate-pulse rounded-full bg-gradient-to-br blur-2xl" />
              }
            >
              <ProgressGlobe progress={stats.percent / 100} reducedMotion={reducedMotion} />
            </Suspense>
            <div className="text-muted-foreground pointer-events-none absolute inset-x-0 bottom-1 text-center text-[11px]">
              São Paulo → Toronto & London · arraste para girar
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
