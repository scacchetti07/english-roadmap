import { useMemo } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Headphones,
  Plus,
  Trophy,
  Volume2,
  Zap,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ALL_DAYS, WEEKS } from '@/data'
import { totalMinutes } from '@/data/schedule'
import { speak } from '@/lib/speech'
import { cn } from '@/lib/utils'
import { useProgress } from '@/store/progress'
import { useUi } from '@/store/ui'
import { TASK_ICON } from './taskIcons'
import { useDayActions } from './useDayActions'

export function DayDetailSheet() {
  const openDayId = useUi((s) => s.openDayId)
  const openDay = useUi((s) => s.openDay)
  const setActiveWeek = useProgress((s) => s.setActiveWeek)
  const completedTasks = useProgress((s) => s.completedTasks)
  const completedDays = useProgress((s) => s.completedDays)
  const toggleTask = useProgress((s) => s.toggleTask)
  const { setDone, addVocab } = useDayActions()

  const index = useMemo(() => ALL_DAYS.findIndex((d) => d.id === openDayId), [openDayId])
  const day = index >= 0 ? ALL_DAYS[index] : null
  const week = day ? WEEKS[day.weekNumber - 1] : null

  const go = (delta: number) => {
    const target = ALL_DAYS[index + delta]
    if (!target) return
    setActiveWeek(target.weekNumber)
    openDay(target.id)
  }

  const done = day ? day.id in completedDays : false
  const tasksDone = day ? day.tasks.filter((t) => t.id in completedTasks).length : 0

  const onToggleTask = (taskId: string) => {
    if (!day) return
    const wasDone = taskId in completedTasks
    toggleTask(taskId)
    const willAllBeDone = !wasDone && tasksDone + 1 === day.tasks.length
    if (willAllBeDone && !done) setDone(day, true)
  }

  return (
    <Sheet open={!!day} onOpenChange={(o) => !o && openDay(null)}>
      <SheetContent className="gap-0 overflow-y-auto p-0 sm:max-w-2xl">
        {day && week && (
          <>
            <SheetHeader className="from-neon-purple/15 to-neon-cyan/5 border-b bg-gradient-to-br pb-5">
              <div className="flex flex-wrap items-center gap-2 pr-8">
                <Badge variant="purple">Semana {week.number}</Badge>
                <Badge variant="outline">
                  {week.emoji} {week.theme}
                </Badge>
                {done && <Badge variant="success">Concluído</Badge>}
              </div>
              <SheetTitle className="mt-2 text-2xl">
                {day.weekday} · {day.title}
              </SheetTitle>
              <SheetDescription>{day.focus}</SheetDescription>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="size-4" /> {totalMinutes(day)} min ativos
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">
                  {tasksDone}/{day.tasks.length} tarefas
                </span>
              </div>
              <Progress
                value={(tasksDone / day.tasks.length) * 100}
                className="mt-2"
                indicatorClassName="bg-success"
              />
            </SheetHeader>

            <div className="space-y-6 p-6">
              <section aria-labelledby="today-plan">
                <h3 id="today-plan" className="mb-3 text-sm font-semibold tracking-wide uppercase">
                  O que estudar hoje
                </h3>
                <ol className="relative space-y-3 border-l pl-5">
                  {day.tasks.map((task, i) => {
                    const Icon = TASK_ICON[task.kind]
                    const checked = task.id in completedTasks
                    return (
                      <li key={task.id} className="relative">
                        <span
                          className={cn(
                            'bg-background absolute top-3 -left-[29px] grid size-4 place-items-center rounded-full border text-[9px] font-bold',
                            checked && 'bg-success border-success text-background',
                          )}
                        >
                          {i + 1}
                        </span>
                        <div
                          className={cn(
                            'rounded-xl border p-4 transition-colors',
                            checked ? 'bg-success/5 border-success/40' : 'bg-card',
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <Checkbox
                              checked={checked}
                              onCheckedChange={() => onToggleTask(task.id)}
                              className="mt-0.5 size-5"
                              aria-label={`Concluir: ${task.label}`}
                            />
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <Icon className="text-neon-cyan size-4" />
                                <span
                                  className={cn(
                                    'font-medium',
                                    checked && 'text-muted-foreground line-through',
                                  )}
                                >
                                  {task.label}
                                </span>
                                <Badge variant="cyan" className="ml-auto">
                                  {task.minutes} min
                                </Badge>
                              </div>
                              <div className="text-muted-foreground mt-1.5 text-xs">
                                <span className="text-foreground/80 font-medium">Recurso: </span>
                                {task.url ? (
                                  <a
                                    href={task.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-primary inline-flex items-center gap-1 hover:underline"
                                  >
                                    {task.resource} <ExternalLink className="size-3" />
                                  </a>
                                ) : (
                                  task.resource
                                )}
                              </div>
                              <p className="mt-2 text-sm leading-relaxed whitespace-pre-line">
                                {task.how}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </section>

              {day.vocab.length > 0 && (
                <section aria-labelledby="today-vocab">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 id="today-vocab" className="text-sm font-semibold tracking-wide uppercase">
                      Vocabulário de hoje ({day.vocab.length})
                    </h3>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => addVocab(day.vocab, day.weekNumber)}
                    >
                      <Plus /> Todos para flashcards
                    </Button>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {day.vocab.map((v) => (
                      <div
                        key={v.id}
                        className="bg-card group flex items-start gap-2 rounded-lg border p-2.5"
                      >
                        <button
                          type="button"
                          onClick={() => speak(v.term)}
                          className="text-muted-foreground hover:text-neon-cyan mt-0.5 cursor-pointer"
                          aria-label={`Ouvir ${v.term}`}
                        >
                          <Volume2 className="size-4" />
                        </button>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium">{v.term}</div>
                          <div className="text-muted-foreground text-xs">{v.meaning}</div>
                        </div>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              type="button"
                              onClick={() => addVocab([v], day.weekNumber)}
                              className="text-muted-foreground hover:text-primary cursor-pointer opacity-60 group-hover:opacity-100"
                              aria-label={`Criar flashcard de ${v.term}`}
                            >
                              <Plus className="size-4" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>Criar flashcard</TooltipContent>
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section className="grid gap-3 sm:grid-cols-2">
                <div className="border-neon-purple/30 bg-neon-purple/5 rounded-xl border p-4">
                  <div className="text-neon-purple mb-1 flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
                    <Zap className="size-4" /> Micro-hábito da semana
                  </div>
                  <p className="text-sm">{week.dailyChallenge}</p>
                </div>
                <div className="border-neon-cyan/30 bg-neon-cyan/5 rounded-xl border p-4">
                  <div className="text-neon-cyan mb-1 flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
                    <Headphones className="size-4" /> Imersão passiva (tempos mortos)
                  </div>
                  <p className="text-sm">{day.passive}</p>
                </div>
              </section>
            </div>

            <Separator />
            <div className="bg-background/95 sticky bottom-0 flex items-center gap-2 p-4 backdrop-blur">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => go(-1)}
                disabled={index <= 0}
                aria-label="Dia anterior"
              >
                <ChevronLeft />
              </Button>
              <Button
                className="flex-1"
                variant={done ? 'outline' : 'neon'}
                size="lg"
                onClick={() => setDone(day, !done)}
              >
                <Trophy />
                {done ? 'Desmarcar dia' : 'Marcar dia como concluído'}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => go(1)}
                disabled={index >= ALL_DAYS.length - 1}
                aria-label="Próximo dia"
              >
                <ChevronRight />
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
