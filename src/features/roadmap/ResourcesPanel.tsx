import {
  BookOpen,
  Clapperboard,
  ExternalLink,
  Gamepad2,
  Globe,
  Headphones,
  Library,
  Music,
  Wrench,
  MonitorPlay,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { ResourceKind, Week } from '@/data'

const KIND: Record<ResourceKind, { icon: typeof Globe; label: string }> = {
  youtube: { icon: MonitorPlay, label: 'YouTube' },
  podcast: { icon: Headphones, label: 'Podcast' },
  site: { icon: Globe, label: 'Site' },
  tool: { icon: Wrench, label: 'Ferramenta' },
  game: { icon: Gamepad2, label: 'Jogo' },
  series: { icon: Clapperboard, label: 'Série' },
  comic: { icon: Library, label: 'HQ' },
  music: { icon: Music, label: 'Música' },
  reading: { icon: BookOpen, label: 'Leitura' },
}

export function ResourcesPanel({ week }: { week: Week }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section>
        <h3 className="mb-3 text-sm font-semibold tracking-wide uppercase">Recursos da semana</h3>
        <div className="grid gap-2">
          {week.resources.map((r) => {
            const k = KIND[r.kind]
            return (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="bg-card hover:border-primary/50 group flex items-start gap-3 rounded-xl border p-3 transition-colors"
              >
                <div className="bg-primary/10 text-primary grid size-9 shrink-0 place-items-center rounded-lg">
                  <k.icon className="size-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 font-medium">
                    {r.name}
                    <ExternalLink className="text-muted-foreground size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="text-muted-foreground text-xs">{r.note}</p>
                </div>
                <span className="text-muted-foreground text-[10px] uppercase">{k.label}</span>
              </a>
            )
          })}
        </div>
      </section>

      <section>
        <h3 className="mb-3 text-sm font-semibold tracking-wide uppercase">
          Conteúdos para o barril
        </h3>
        <Card className="py-2">
          <CardContent className="divide-y px-0">
            {week.contents.map((c) => {
              const k = KIND[c.kind]
              const body = (
                <>
                  <k.icon className="text-neon-cyan mt-0.5 size-4 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-sm font-medium">
                      {c.title}
                      {c.url && <ExternalLink className="text-muted-foreground size-3" />}
                    </div>
                    <p className="text-muted-foreground text-xs">{c.detail}</p>
                  </div>
                </>
              )
              return c.url ? (
                <a
                  key={c.title}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:bg-accent/40 flex gap-3 px-5 py-3 transition-colors"
                >
                  {body}
                </a>
              ) : (
                <div key={c.title} className="flex gap-3 px-5 py-3">
                  {body}
                </div>
              )
            })}
          </CardContent>
        </Card>
        <Card className="mt-4 gap-3">
          <CardHeader>
            <CardTitle className="text-sm">Como usar o barril esta semana</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-1.5 text-xs">
            <p>
              • Salve cada item na playlist certa (Ouvir, Conforto, Desafio, Clipes de treino, Já
              visto).
            </p>
            <p>• Regra dos 3 minutos: entendeu menos de 70%? Vai para a pasta Desafio.</p>
            <p>• Domingo: reabasteça até ter 10 itens por pasta.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
