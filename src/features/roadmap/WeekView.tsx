import { AnimatePresence, motion } from 'motion/react'
import { BookA, CalendarDays, Library, Sparkles, Target, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { WEEKS } from '@/data'
import { useRoadmapStats } from '@/hooks/useRoadmapStats'
import { useProgress } from '@/store/progress'
import { useUi } from '@/store/ui'
import { DayCard } from './DayCard'
import { GrammarPanel } from './GrammarPanel'
import { ResourcesPanel } from './ResourcesPanel'
import { useDayActions } from './useDayActions'
import { VocabPanel } from './VocabPanel'

export function WeekView() {
  const activeWeek = useProgress((s) => s.activeWeek)
  const week = WEEKS[activeWeek - 1] ?? WEEKS[0]
  const { perWeek, nextDay } = useRoadmapStats()
  const openDay = useUi((s) => s.openDay)
  const { setDone } = useDayActions()
  const p = perWeek[week.number - 1]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={week.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
        className="space-y-6"
      >
        <div className="from-primary/10 via-card to-card relative overflow-hidden rounded-2xl border bg-gradient-to-br p-5 sm:p-6">
          <div
            className="pointer-events-none absolute -top-6 -right-2 text-[120px] leading-none opacity-10 select-none"
            aria-hidden
          >
            {week.emoji}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="purple">Semana {week.number}</Badge>
            <Badge variant="outline">{week.phase}</Badge>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {week.emoji} {week.theme}
          </h2>
          <p className="text-muted-foreground">{week.subtitle}</p>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="flex gap-2 text-sm">
              <Target className="text-neon-cyan mt-0.5 size-4 shrink-0" />
              <span>
                <span className="font-medium">Meta: </span>
                {week.goal}
              </span>
            </div>
            <div className="flex gap-2 text-sm">
              <Sparkles className="text-neon-purple mt-0.5 size-4 shrink-0" />
              <span>
                <span className="font-medium">Conexão com seus interesses: </span>
                {week.interestHook}
              </span>
            </div>
            <div className="flex gap-2 text-sm md:col-span-2">
              <Zap className="mt-0.5 size-4 shrink-0 text-amber-400" />
              <span>
                <span className="font-medium">Atividade diária: </span>
                {week.dailyChallenge}
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <Progress
              value={p.percent}
              className="h-2.5"
              indicatorClassName="bg-success"
              aria-label="Progresso da semana"
            />
            <span className="text-sm font-semibold tabular-nums">{p.done}/7</span>
          </div>
        </div>

        <Tabs defaultValue="days">
          <TabsList className="h-auto w-full flex-wrap justify-start sm:w-fit">
            <TabsTrigger value="days">
              <CalendarDays /> Dias
            </TabsTrigger>
            <TabsTrigger value="grammar">
              <BookA /> Gramática
            </TabsTrigger>
            <TabsTrigger value="vocab">
              <Sparkles /> Vocabulário · {week.vocab.length}
            </TabsTrigger>
            <TabsTrigger value="resources">
              <Library /> Recursos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="days" className="mt-4">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {week.days.map((day) => (
                <DayCard
                  key={day.id}
                  day={day}
                  isNext={nextDay?.id === day.id}
                  onOpen={() => openDay(day.id)}
                  onToggle={(done) => setDone(day, done)}
                />
              ))}
              <div className="text-muted-foreground flex flex-col justify-center rounded-xl border border-dashed p-4 text-xs">
                <p className="text-foreground mb-1 font-medium">Dia ruim? Plano mínimo de 10 min</p>
                <p>
                  Anki só com revisões + monólogo de 2 min sobre o seu dia. Nunca zero, nunca falhe
                  dois dias seguidos.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="grammar" className="mt-4">
            <GrammarPanel grammar={week.grammar} />
          </TabsContent>
          <TabsContent value="vocab" className="mt-4">
            <VocabPanel week={week} />
          </TabsContent>
          <TabsContent value="resources" className="mt-4">
            <ResourcesPanel week={week} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </AnimatePresence>
  )
}
