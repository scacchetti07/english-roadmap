import { CheckCircle2, PencilLine, Volume2, XCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Grammar } from '@/data'
import { speak } from '@/lib/speech'

export function GrammarPanel({ grammar }: { grammar: Grammar }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardDescription>Tópico gramatical da semana</CardDescription>
          <CardTitle className="text-xl">{grammar.topic}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">{grammar.summary}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regras práticas</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2.5">
            {grammar.rules.map((r) => (
              <li key={r} className="flex gap-2 text-sm">
                <span className="bg-neon-cyan mt-1.5 size-1.5 shrink-0 rounded-full" />
                {r}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Exemplos (clique para ouvir)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {grammar.examples.map((e) => (
            <button
              key={e.en}
              type="button"
              onClick={() => speak(e.en)}
              className="hover:border-neon-cyan/50 hover:bg-neon-cyan/5 flex w-full cursor-pointer items-start gap-2 rounded-lg border p-3 text-left text-sm transition-colors"
            >
              <Volume2 className="text-neon-cyan mt-0.5 size-4 shrink-0" />
              <span className="italic">{e.en}</span>
            </button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Erros comuns de brasileiros</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {grammar.mistakes.map((m) => (
            <div key={m.wrong} className="space-y-1 rounded-lg border p-3 text-sm">
              <div className="text-destructive flex items-start gap-2">
                <XCircle className="mt-0.5 size-4 shrink-0" />
                <span className="line-through decoration-1">{m.wrong}</span>
              </div>
              <div className="text-success flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                <span>{m.right}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-neon-purple/40 bg-neon-purple/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PencilLine className="text-neon-purple size-5" /> Prática
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{grammar.practice}</p>
          <p className="text-muted-foreground mt-3 text-xs">
            Dica: cole o texto na IA com o prompt de correção da quarta-feira e transforme as
            correções em flashcards.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
