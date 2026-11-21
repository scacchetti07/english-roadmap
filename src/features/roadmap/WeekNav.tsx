import { Check } from 'lucide-react'
import { WEEKS } from '@/data'
import { useRoadmapStats } from '@/hooks/useRoadmapStats'
import { cn } from '@/lib/utils'
import { useProgress } from '@/store/progress'
import { ProgressRing } from './ProgressRing'

export function WeekNav() {
  const active = useProgress((s) => s.activeWeek)
  const setActive = useProgress((s) => s.setActiveWeek)
  const { perWeek } = useRoadmapStats()

  return (
    <nav aria-label="Semanas" className="lg:sticky lg:top-4">
      <div className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
        {WEEKS.map((week, i) => {
          const p = perWeek[i]
          const isActive = week.number === active
          const showPhase = i === 0 || WEEKS[i - 1].phase !== week.phase
          return (
            <div key={week.id} className="contents">
              {showPhase && (
                <div className="text-muted-foreground hidden px-2 pt-3 pb-1 text-[11px] font-semibold tracking-wider uppercase first:pt-0 lg:block">
                  {week.phase}
                </div>
              )}
              <button
                type="button"
                onClick={() => setActive(week.number)}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'group flex min-w-[220px] snap-start items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all lg:min-w-0',
                  'hover:border-primary/40 hover:bg-accent/40 focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] cursor-pointer',
                  isActive
                    ? 'border-primary/60 bg-primary/10 shadow-primary/10 shadow-lg'
                    : 'bg-card/40',
                )}
              >
                <ProgressRing percent={p.percent}>
                  {p.percent >= 100 ? (
                    <Check className="text-success size-4" />
                  ) : (
                    <span>{week.number}</span>
                  )}
                </ProgressRing>
                <div className="min-w-0 flex-1">
                  <div className="text-muted-foreground text-[11px]">
                    Semana {week.number} · {p.done}/7
                  </div>
                  <div className="truncate text-sm font-medium">
                    <span className="mr-1">{week.emoji}</span>
                    {week.theme}
                  </div>
                </div>
              </button>
            </div>
          )
        })}
      </div>
    </nav>
  )
}
