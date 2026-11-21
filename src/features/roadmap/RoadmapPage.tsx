import { DayDetailSheet } from './DayDetailSheet'
import { WeekNav } from './WeekNav'
import { WeekView } from './WeekView'

export function RoadmapPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside>
        <WeekNav />
      </aside>
      <WeekView />
      <DayDetailSheet />
    </div>
  )
}
