import { R, ytSearch } from '../resources'
import type { WeekSource } from '../types'

export const week09: WeekSource = {
  number: 9,
  theme: 'Life at work',
  subtitle: 'Reuniões, e-mails, stand-ups e equipe',
  emoji: '🧑‍💻',
  interestHook:
    'Cultura dev em inglês: stand-ups, code reviews e o humor do ThePrimeagen e do Fireship.',
  goal: 'Participar de reuniões, discordar com educação e escrever e-mails profissionais naturais.',
  grammar: {
    topic: 'Linguagem indireta, polidez e hedging',
    summary:
      'No trabalho (especialmente no UK), ser direto demais soa rude. Suavize pedidos com perguntas indiretas ("I was wondering if you could..."), modais (could, might, would) e hedging ("It might be worth...", "I\'m not sure that\'s the best approach"). Perguntas indiretas não invertem sujeito e verbo.',
    rules: [
      'Pedido direto → indireto: "Send me the file" → "Could you send me the file when you get a chance?"',
      '"I was wondering if..." + past: "I was wondering if we could push the deadline."',
      'Pergunta indireta: "Do you know where the meeting is?" (não "where is the meeting").',
      'Discordar: "I see your point, but...", "I\'m not sure I agree...".',
      'Hedging: seem, tend to, might, perhaps, slightly, a bit.',
    ],
    examples: [
      { en: 'Would you mind taking a look at my PR when you get a chance?' },
      { en: "I was wondering if we could move the stand-up to 10. I've got a clash." },
      { en: 'I see your point, but it might be worth testing it with a few users first.' },
      { en: 'Just a quick heads-up: the deploy might be delayed until tomorrow.' },
    ],
    mistakes: [
      {
        wrong: 'Can you tell me where is the meeting room?',
        right: 'Can you tell me where the meeting room is?',
      },
      {
        wrong: 'I need you send me this today.',
        right: 'Could you send me this by the end of the day?',
      },
      { wrong: "You're wrong.", right: "I'm not sure I agree with that." },
      { wrong: 'I will wait your return.', right: 'I look forward to hearing from you.' },
    ],
    practice:
      'Reescreva 6 frases diretas e "rudes" em versões educadas e indiretas, como faria um colega britânico.',
  },
  vocabRaw: `
stand-up | short daily team meeting | w
agenda | list of topics for a meeting | w
action items | tasks decided in a meeting | ch
deadline | final time to finish something | w
ETA | estimated time of arrival/completion | w
heads-up | advance warning | sl
FYI | for your information | w
ASAP | as soon as possible | w
EOD | end of day | w
loop someone in | include someone in the conversation | ch
keep me posted | keep me updated | ch
circle back | return to a topic later | pv
touch base | briefly contact someone | id
on the same page | agreeing / understanding the same thing | id
bring up | mention a topic | pv
go over | review | pv
sort out | resolve | pv
deal with | handle | pv
look into | investigate | pv
come up with | think of (an idea) | pv
run something by someone | ask someone's opinion | ch
push back | resist; or postpone | pv
reschedule | change the time of | w
postpone | delay to a later time | w
workload | amount of work | w
swamped | extremely busy | w
bandwidth | capacity to take on work | w
prioritise | decide what's most important | w
blocker | something preventing progress | w
ship | release a product/feature | w
roll out | release gradually | pv
deploy | put code into production | w
feedback | comments to improve something | w
constructive criticism | helpful negative feedback | ch
line manager | your direct boss (UK) | ch
team lead | person leading a team | ch
stakeholder | person affected by a project | w
onboarding | process of integrating new staff | w
I was wondering if | polite request | ch
Would you mind...? | polite request | ch
Could you possibly...? | very polite request | ch
It might be worth... | polite suggestion | ch
I'm not sure I agree | polite disagreement | ch
I see your point, but | acknowledging before disagreeing | ch
Just to clarify, | checking understanding | ch
Sorry to interrupt, but | interrupting politely | ch
Could you elaborate on that? | asking for more detail | ch
I'll get back to you on that | I'll reply later | ch
Let's take this offline | let's discuss it separately | ch
Hope you're well | email opener | ch
Please find attached | the file is attached | ch
Kind regards | formal email sign-off | ch
Thanks in advance | thanks before they do it | ch
as per | according to (emails) | ch
work-life balance | balance between work and personal life | ch
annual leave | paid holiday (UK); "vacation" (CA) | ch
time off | days away from work | ch
overtime | extra hours | w
call it a day | stop working for the day | id
burn the midnight oil | work late into the night | id
a clash | two meetings at the same time (UK) | w
catch-up | informal meeting to update | w
one-on-one | private meeting with your manager | w
sync | short meeting to align | w
OOO | out of office | w
quick question | informal way to start a message | ch
no rush | not urgent | ch
my bad | my mistake (informal) | sl
nitpick | very small criticism (code review) | w
LGTM | "looks good to me" (code review) | w
reach a consensus | all agree | ch
`,
  resources: [
    R.fireship,
    R.primeagen,
    R.syntax,
    R.reddit('ExperiencedDevs', 'Discussões sobre vida em equipes de tecnologia.'),
    R.youglish,
    R.anki,
  ],
  contents: [
    {
      title: 'The Office UK (série)',
      kind: 'series',
      detail: 'Cultura de escritório britânica (e o que não fazer).',
    },
    {
      title: 'ThePrimeagen',
      kind: 'youtube',
      detail: 'Reações a artigos de tecnologia: muita gíria de dev.',
      url: R.primeagen.url,
    },
    {
      title: 'Business English: meetings',
      kind: 'youtube',
      detail: 'Frases de reunião para chorusing.',
      url: ytSearch('business english phrases for meetings native'),
    },
    {
      title: 'Syntax',
      kind: 'podcast',
      detail: 'Um episódio por semana no deslocamento.',
      url: R.syntax.url,
    },
    {
      title: 'British workplace culture',
      kind: 'youtube',
      detail: 'O que "quite good" e "with respect" realmente significam.',
      url: ytSearch('british workplace culture explained what they really mean'),
    },
  ],
  dailyChallenge:
    'Pegue uma mensagem que você mandou hoje (em português) e reescreva mentalmente em inglês profissional e educado.',
  plan: {
    shadowing: { clip: '60s de um vídeo do Fireship', resource: 'Fireship', url: R.fireship.url },
    roleplayWork:
      'Daily stand-up: conte o que fez ontem, o que fará hoje e um blocker; depois discorde educadamente de uma decisão técnica.',
    reading: {
      what: 'uma discussão sobre code review ou reuniões',
      resource: 'r/ExperiencedDevs',
      url: 'https://www.reddit.com/r/ExperiencedDevs',
    },
    writingPrompt:
      'um e-mail pedindo para adiar um prazo, com justificativa e proposta de nova data.',
    interaction: {
      what: 'vídeos de reação do ThePrimeagen: dê sua opinião antes dele',
      resource: 'ThePrimeagen',
    },
    roleplaySocial: 'Café com um colega novo: falem sobre a empresa, o trabalho e o fim de semana.',
    chorusing: [
      'I was wondering if we could...',
      'I see your point, but...',
      "Let's circle back to this",
    ],
    game: {
      title: 'Qualquer jogo em equipe (co-op/online)',
      prompt:
        'Faça call-outs em inglês como se a squad fosse um time de trabalho: plan, priorities, blockers.',
    },
    monologue:
      'apresente um projeto que você fez (trabalho ou pessoal) como numa demo para a equipe.',
  },
}
