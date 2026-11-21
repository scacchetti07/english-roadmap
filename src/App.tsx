import { lazy, Suspense, useEffect } from 'react'
import { BookMarked, Compass, Layers } from 'lucide-react'
import { Toaster } from '@/components/ui/sonner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ProgressHeader } from '@/features/layout/ProgressHeader'
import { RoadmapPage } from '@/features/roadmap/RoadmapPage'
import { useFlashcards } from '@/store/flashcards'
import { useProgress } from '@/store/progress'
import { useUi, type AppTab } from '@/store/ui'

const FlashcardsPage = lazy(() =>
  import('@/features/flashcards/FlashcardsPage').then((m) => ({ default: m.FlashcardsPage })),
)
const GuidePage = lazy(() =>
  import('@/features/guide/GuidePage').then((m) => ({ default: m.GuidePage })),
)

const Loading = () => <div className="bg-muted/40 h-96 animate-pulse rounded-xl" />

export default function App() {
  const theme = useProgress((s) => s.theme)
  const tab = useUi((s) => s.tab)
  const setTab = useUi((s) => s.setTab)
  const cardCount = useFlashcards((s) => s.cards.length)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <TooltipProvider>
      <div className="min-h-dvh">
        <ProgressHeader />
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Tabs value={tab} onValueChange={(v) => setTab(v as AppTab)}>
            <TabsList className="mb-4 h-10">
              <TabsTrigger value="roadmap" className="px-4">
                <Compass /> Roteiro
              </TabsTrigger>
              <TabsTrigger value="flashcards" className="px-4">
                <Layers /> Flashcards{' '}
                {cardCount > 0 && (
                  <span className="bg-primary/20 text-primary rounded px-1.5 text-[10px]">
                    {cardCount}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="guide" className="px-4">
                <BookMarked /> Guia
              </TabsTrigger>
            </TabsList>
            <TabsContent value="roadmap">
              <RoadmapPage />
            </TabsContent>
            <TabsContent value="flashcards">
              <Suspense fallback={<Loading />}>
                <FlashcardsPage />
              </Suspense>
            </TabsContent>
            <TabsContent value="guide">
              <Suspense fallback={<Loading />}>
                <GuidePage />
              </Suspense>
            </TabsContent>
          </Tabs>
        </main>
        <footer className="text-muted-foreground mx-auto max-w-7xl px-4 pb-10 text-center text-xs sm:px-6">
          Seu progresso e seus flashcards ficam salvos neste navegador. Use o botão de backup no
          topo para levar para outro dispositivo.
        </footer>
      </div>
      <Toaster richColors position="bottom-right" theme={theme} />
    </TooltipProvider>
  )
}
