import { useRef, useState } from 'react'
import { Download, Moon, RotateCcw, Sun, Upload } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { downloadText } from '@/lib/anki'
import { useFlashcards } from '@/store/flashcards'
import { useProgress } from '@/store/progress'

export function TopBar() {
  const theme = useProgress((s) => s.theme)
  const toggleTheme = useProgress((s) => s.toggleTheme)
  const [confirmReset, setConfirmReset] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const exportBackup = () => {
    const { completedDays, completedTasks, knownVocab, setupChecks } = useProgress.getState()
    const { cards } = useFlashcards.getState()
    const payload = {
      app: 'english-roadmap',
      version: 1,
      exportedAt: new Date().toISOString(),
      progress: { completedDays, completedTasks, knownVocab, setupChecks },
      cards,
    }
    downloadText(
      `english-roadmap-backup-${new Date().toISOString().slice(0, 10)}.json`,
      JSON.stringify(payload, null, 2),
      'application/json',
    )
    toast.success('Backup exportado', {
      description: 'Guarde o arquivo para restaurar em outro navegador.',
    })
  }

  const importBackup = async (file: File) => {
    try {
      const data = JSON.parse(await file.text())
      if (data?.app !== 'english-roadmap') throw new Error('Arquivo não reconhecido')
      useProgress.getState().importState(data.progress ?? {})
      const added = Array.isArray(data.cards) ? useFlashcards.getState().importCards(data.cards) : 0
      toast.success('Backup restaurado', {
        description: `Progresso importado e ${added} flashcards adicionados.`,
      })
    } catch (err) {
      toast.error('Não foi possível importar', {
        description: err instanceof Error ? err.message : 'JSON inválido',
      })
    }
  }

  return (
    <div className="flex items-center gap-1">
      <input
        ref={fileRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (f) void importBackup(f)
          e.target.value = ''
        }}
      />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={exportBackup} aria-label="Exportar backup">
            <Download />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Exportar backup (progresso + flashcards)</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => fileRef.current?.click()}
            aria-label="Importar backup"
          >
            <Upload />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Importar backup</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setConfirmReset(true)}
            aria-label="Zerar progresso"
          >
            <RotateCcw />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Zerar progresso</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Alternar tema">
            {theme === 'dark' ? <Sun /> : <Moon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>Tema {theme === 'dark' ? 'claro' : 'escuro'}</TooltipContent>
      </Tooltip>

      <Dialog open={confirmReset} onOpenChange={setConfirmReset}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Zerar todo o progresso?</DialogTitle>
            <DialogDescription>
              Dias, tarefas, vocabulário dominado e checklist de setup voltam ao zero. Seus
              flashcards continuam salvos. Se quiser, exporte um backup antes.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={() => {
                useProgress.getState().reset()
                setConfirmReset(false)
                toast('Progresso zerado. Bora recomeçar! 💪')
              }}
            >
              Zerar progresso
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
