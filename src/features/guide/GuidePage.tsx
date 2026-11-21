import { Clock, Flag, Headphones, ListChecks, Rocket, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { useProgress } from '@/store/progress'

const SETUP = [
  'Celular com idioma do sistema em inglês (UK ou Canada)',
  'Computador e navegador em inglês',
  'Conta Google com idioma principal em inglês',
  'Assistente de voz (Google / Siri) em inglês',
  'Teclado do celular com inglês adicionado',
  'Perfil de streaming só em inglês (áudio + legenda)',
  'Steam / console em inglês',
  'Letras ativadas no Spotify',
  'Anki instalado com FSRS ativado',
  'Language Reactor instalado no Chrome',
  'Nota "LACUNAS" fixada no celular',
  'Playlists do barril criadas (Ouvir, Conforto, Desafio, Clipes, Ler, Vida real, Já visto)',
  'Inscrito em 30+ canais em inglês e "Não tenho interesse" no conteúdo em PT (detox 14 dias)',
]

const LAYERS = [
  {
    icon: Zap,
    title: 'Ativa',
    time: '30 min fixos',
    text: 'Fala, vocabulário e correção. O motor do progresso.',
    color: 'text-neon-purple',
  },
  {
    icon: Headphones,
    title: 'Passiva',
    time: '1–2 h espalhadas',
    text: 'Tempos mortos: deslocamento, refeições, academia, antes de dormir.',
    color: 'text-neon-cyan',
  },
  {
    icon: Rocket,
    title: 'Micro-hábitos',
    time: 'segundos, várias vezes',
    text: 'Pensar em inglês, narrar o que faz, caçada de palavras.',
    color: 'text-amber-400',
  },
]

const PHASES = [
  {
    period: 'Meses 1–2',
    title: 'Setup e fundação',
    goal: 'Rotina rodando 6/7 dias, ~400 cards',
    current: true,
  },
  {
    period: 'Meses 3–6',
    title: 'Volume e fala',
    goal: 'B2+ sólido; 15 min de conversa sem travar',
  },
  { period: 'Meses 7–12', title: 'Rumo ao C1', goal: 'Simulado IELTS ~7.0 / CELPIP 8–9' },
  { period: 'Ano 2', title: 'C1 forte', goal: 'Prova oficial com CLB 9 / IELTS 7+' },
  {
    period: 'Anos 3+',
    title: 'Caminho para o C2',
    goal: 'Refinamento, idealmente já morando fora',
  },
]

export function GuidePage() {
  const checks = useProgress((s) => s.setupChecks)
  const toggle = useProgress((s) => s.toggleSetup)
  const done = SETUP.filter((_, i) => `setup-${i}` in checks).length

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ListChecks className="text-neon-cyan size-5" /> Missão de setup (semana 1)
          </CardTitle>
          <CardDescription>Transforme o inglês no padrão da sua vida digital.</CardDescription>
          <div className="mt-2 flex items-center gap-3">
            <Progress value={(done / SETUP.length) * 100} indicatorClassName="bg-neon-cyan" />
            <span className="text-sm tabular-nums">
              {done}/{SETUP.length}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {SETUP.map((item, i) => {
              const id = `setup-${i}`
              return (
                <li key={id}>
                  <label className="hover:bg-accent/40 flex cursor-pointer items-start gap-3 rounded-lg p-2 text-sm">
                    <Checkbox
                      checked={id in checks}
                      onCheckedChange={() => toggle(id)}
                      className="mt-0.5"
                    />
                    <span className={id in checks ? 'text-muted-foreground line-through' : ''}>
                      {item}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="text-neon-purple size-5" /> As 3 camadas do dia
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            {LAYERS.map((l) => (
              <div key={l.title} className="rounded-xl border p-3">
                <l.icon className={`size-5 ${l.color}`} />
                <div className="mt-2 font-semibold">{l.title}</div>
                <div className="text-muted-foreground text-xs">{l.time}</div>
                <p className="mt-2 text-xs">{l.text}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flag className="text-success size-5" /> Fases e estimativa realista
            </CardTitle>
            <CardDescription>
              Seguindo o plano à risca: 30 min ativos + 1–1,5 h de imersão por dia.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="relative space-y-4 border-l pl-5">
              {PHASES.map((p) => (
                <li key={p.title} className="relative">
                  <span
                    className={`absolute top-1 -left-[27px] size-3 rounded-full border-2 ${p.current ? 'bg-neon-cyan border-neon-cyan' : 'bg-background'}`}
                  />
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium">{p.title}</span>
                    <Badge variant={p.current ? 'cyan' : 'outline'}>{p.period}</Badge>
                    {p.current && <Badge variant="purple">Este roteiro</Badge>}
                  </div>
                  <p className="text-muted-foreground text-xs">{p.goal}</p>
                </li>
              ))}
            </ol>
            <div className="bg-muted/50 mt-5 grid grid-cols-3 gap-2 rounded-xl p-3 text-center text-xs">
              <div>
                <div className="text-lg font-bold">10–14 m</div>
                <div className="text-muted-foreground">C1 funcional</div>
              </div>
              <div>
                <div className="text-lg font-bold">18–24 m</div>
                <div className="text-muted-foreground">C1 forte (CLB 9)</div>
              </div>
              <div>
                <div className="text-lg font-bold">3–4 anos</div>
                <div className="text-muted-foreground">C2</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
