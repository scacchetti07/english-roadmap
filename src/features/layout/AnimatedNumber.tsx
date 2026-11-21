import { useEffect } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'motion/react'

export function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const mv = useMotionValue(0)
  const text = useTransform(mv, (v) => `${Math.round(v)}${suffix}`)
  useEffect(() => {
    const controls = animate(mv, value, { duration: 1.1, ease: 'easeOut' })
    return () => controls.stop()
  }, [mv, value])
  return <motion.span>{text}</motion.span>
}
