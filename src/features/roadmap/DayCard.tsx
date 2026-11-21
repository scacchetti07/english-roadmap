import { motion } from 'motion/react'
import { Clock } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import type { Day } from '@/data'
import { TASK_ICON } from './taskIcons'
import { totalMinutes } from '@/data/schedule'
import { cn } from '@/lib/utils'
import { useProgress } from '@/store/progress'

export function DayCard({
  day,
  isNext,
  onOpen,
  onToggle,
}: {
  day: Day
  isNext: boolean
  onOpen: () => void
  onToggle: (done: boolean) => void
}) {
  const done = useProgress((s) => day.id in s.completedDays)
  const tasksDone = useProgress((s) => day.tasks.filter((t) => t.id in s.completedTasks).length)

  return (
    <motion.div
      layout
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpen()
          }
        }}
        aria-label={`${day.weekday}: ${day.title}. ${done ? 'Concluído' : 'Pendente'}. Abrir detalhes`}
        className={cn(
          'group relative flex h-full cursor-pointer flex-col gap-3 overflow-hidden rounded-xl border p-4 transition-colors outline-none',
          'focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          done ? 'border-success/50 bg-success/5' : 'bg-card hover:border-primary/40',
          isNext && !done && 'border-neon-cyan/60 shadow-neon-cyan/10 shadow-lg',
        )}
      >
        {isNext && !done && (
          <span className="bg-neon-cyan text-background absolute top-0 right-0 rounded-bl-lg px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase">
            Próximo
          </span>
        )}
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
              {day.weekday}
            </div>
            <div className="mt-0.5 leading-snug font-semibold">{day.title}</div>
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            className="pt-0.5"
          >
            <Checkbox
              checked={done}
              onCheckedChange={(v) => onToggle(v === true)}
              aria-label={`Marcar ${day.weekday} como concluído`}
              className="size-5"
            />
          </div>
        </div>
        <p className="text-muted-foreground line-clamp-2 text-xs">{day.focus}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex -space-x-1">
            {day.tasks.map((t) => {
              const Icon = TASK_ICON[t.kind]
              return (
                <span
                  key={t.id}
                  className="bg-muted ring-card grid size-6 place-items-center rounded-full ring-2"
                >
                  <Icon className="size-3" />
                </span>
              )
            })}
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <span>
              {tasksDone}/{day.tasks.length}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3" />
              {totalMinutes(day)} min
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
