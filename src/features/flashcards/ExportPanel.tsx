import { useMemo, useState } from 'react'
import { ClipboardCopy, Download, FileSpreadsheet } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { downloadText, toAnkiTxt, toCsv } from '@/lib/anki'
import { DEFAULT_DECK, useFlashcards } from '@/store/flashcards'

export function ExportPanel() {
  const cards = useFlashcards((s) => s.cards)
  const [scope, setScope] = useState('all')
  const decks = useMemo(() => Array.from(new Set(cards.map((c) => c.deck))).sort(), [cards])
  const selected = scope === 'all' ? cards : cards.filter((c) => c.deck === scope)
  const stamp = new Date().toISOString().slice(0, 10)

  const exportAnki = () => {
    downloadText(`anki-english-${stamp}.txt`, toAnkiTxt(selected, DEFAULT_DECK))
    toast.success(`${selected.length} cards exportados para o Anki`, {
      description: 'No Anki: Arquivo → Importar e escolha o .txt.',
    })
  }
  const exportCsv = () => {
    downloadText(`flashcards-${stamp}.csv`, '﻿' + toCsv(selected), 'text/csv')
    toast.success('CSV exportado')
  }
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(toAnkiTxt(selected, DEFAULT_DECK))
      toast.success('Copiado para a área de transferência')
    } catch {
      toast.error('Não foi possível copiar neste navegador')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exportar para o Anki</CardTitle>
        <CardDescription>
          Arquivo .txt já configurado (separador, tipo de nota, baralhos e tags).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="scope">O que exportar</Label>
          <select
            id="scope"
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            className="border-input dark:bg-input/30 focus-visible:ring-ring/50 h-9 w-full rounded-md border bg-transparent px-3 text-sm outline-none focus-visible:ring-[3px]"
          >
            <option value="all">Todos os baralhos ({cards.length})</option>
            {decks.map((d) => (
              <option key={d} value={d}>
                {d} ({cards.filter((c) => c.deck === d).length})
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <Button variant="neon" onClick={exportAnki} disabled={!selected.length}>
            <Download /> Baixar para o Anki (.txt)
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" onClick={exportCsv} disabled={!selected.length}>
              <FileSpreadsheet /> CSV
            </Button>
            <Button variant="outline" onClick={copy} disabled={!selected.length}>
              <ClipboardCopy /> Copiar
            </Button>
          </div>
        </div>
        <ol className="text-muted-foreground list-decimal space-y-1 pl-4 text-xs">
          <li>Abra o Anki no computador (versão 2.1.55 ou mais nova).</li>
          <li>
            <span className="text-foreground">Arquivo → Importar</span> e escolha o .txt baixado.
          </li>
          <li>
            Confira a prévia: tipo "Basic", campos Frente/Verso, tags na coluna 3 e baralho na
            coluna 4.
          </li>
          <li>Clique em Importar. Os sub-baralhos (::) são criados automaticamente.</li>
          <li>Sincronize com o AnkiWeb para estudar no celular.</li>
        </ol>
      </CardContent>
    </Card>
  )
}
