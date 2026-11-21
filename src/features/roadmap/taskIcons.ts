import { BookOpen, Ear, MessageCircle, PenLine, RefreshCw, Sparkles } from 'lucide-react'
import type { Task } from '@/data'

export const TASK_ICON: Record<Task['kind'], typeof BookOpen> = {
  vocab: Sparkles,
  speaking: MessageCircle,
  listening: Ear,
  reading: BookOpen,
  writing: PenLine,
  review: RefreshCw,
}
