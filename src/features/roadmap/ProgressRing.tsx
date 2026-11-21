import { cn } from '@/lib/utils'

export function ProgressRing({
  percent,
  size = 36,
  stroke = 3.5,
  className,
  children,
}: {
  percent: number
  size?: number
  stroke?: number
  className?: string
  children?: React.ReactNode
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  return (
    <div
      className={cn('relative grid shrink-0 place-items-center', className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          className="stroke-muted fill-none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          strokeLinecap="round"
          className={cn(
            'fill-none transition-[stroke-dashoffset] duration-700',
            percent >= 100 ? 'stroke-success' : 'stroke-neon-cyan',
          )}
          strokeDasharray={c}
          strokeDashoffset={c - (percent / 100) * c}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-[10px] font-semibold">
        {children}
      </div>
    </div>
  )
}
