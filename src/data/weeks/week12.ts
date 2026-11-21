import { R, ytSearch } from '../resources'
import type { WeekSource } from '../types'

export const week12: WeekSource = {
  number: 12,
  theme: 'Culture, opinions & the big move',
  subtitle: 'Cultura UK/Canadá, humor, debates e a decisão de se mudar',
  emoji: '🌍',
  interestHook:
    "Taskmaster e Kim's Convenience: o humor britânico e o canadense explicam muito sobre cada país.",
  goal: 'Defender opiniões, pesar prós e contras e falar sobre arrependimentos e hipóteses com naturalidade.',
  grammar: {
    topic: 'Third conditional, mixed conditionals e "wish / if only"',
    summary:
      'Third conditional = hipótese sobre o passado (não aconteceu): If + past perfect, would have + particípio. Mixed = passado afetando o presente: If + past perfect, would + verbo. "I wish / If only" + past (desejo no presente) ou + past perfect (arrependimento sobre o passado).',
    rules: [
      'Third: "If I had started earlier, I would have reached C1 already."',
      'Mixed: "If I had moved in 2020, I would be a permanent resident now."',
      'Wish (presente): "I wish I lived in London." (mas não moro)',
      'Wish (passado): "I wish I had studied English as a kid."',
      'Formal: "Had I known, I would have applied." (inversão sem "if")',
    ],
    examples: [
      { en: "If I hadn't found anime, I probably wouldn't speak English this well." },
      { en: "If I'd taken the job in Toronto, I'd be dealing with snow right now." },
      { en: 'I wish British people would just say what they mean!' },
      { en: 'Having said that, the quality of life would more than make up for it.' },
    ],
    mistakes: [
      {
        wrong: 'If I would have known, I would have gone.',
        right: 'If I had known, I would have gone.',
      },
      { wrong: 'I wish I can live abroad.', right: 'I wish I could live abroad.' },
      { wrong: 'In my opinion, I think that...', right: 'In my opinion, ... / I think (that)...' },
      { wrong: 'I agree with you in parts.', right: 'I agree with you to some extent.' },
    ],
    practice:
      'Escreva um parágrafo de reflexão: o que teria sido diferente se você tivesse começado o inglês mais cedo, e o que você deseja para daqui a 2 anos.',
  },
  vocabRaw: `
culture shock | confusion when living in a new culture | ch
politeness | being polite | w
queue | line of people waiting (UK) | w
jump the queue | get ahead of others unfairly (UK) | ch
understatement | saying something is less than it is | w
sarcasm | saying the opposite to mock | w
dry humour | humour delivered seriously (very British) | ch
banter | playful teasing conversation | w
take the mickey | tease someone (UK) | id
wind someone up | tease or annoy someone (UK) | pv
I'm only joking | I'm not serious | ch
no offence, but | before saying something possibly rude | ch
fair play | well done / that's fair (UK) | ch
not bad at all | (UK understatement) actually very good | ch
quite good | (UK) often means just "OK" | ch
I'll bear it in mind | (UK) may politely mean "no" | ch
with all due respect | polite (often strong) disagreement | ch
multicultural | with many cultures | w
diverse | varied, with different people | w
expat | person living outside their country | w
permanent resident | PR status (CA) | ch
citizenship | being a citizen | w
integrate | become part of a society | w
adapt | change to fit new conditions | w
belong | feel part of a place or group | w
cost of living | how expensive daily life is | ch
quality of life | general wellbeing | ch
pros and cons | advantages and disadvantages | ch
on the one hand | introduces one side | ch
on the other hand | introduces the other side | ch
having said that | however, considering what I said | ch
that said | however | ch
whereas | in contrast | w
I'd argue that | I believe (strong opinion) | ch
it depends on | it varies according to | ch
it's debatable | people disagree about it | ch
I see where you're coming from | I understand your perspective | ch
I couldn't agree more | I completely agree | ch
I beg to differ | I disagree (formal/ironic) | ch
that's not necessarily true | soft disagreement | ch
to some extent | partly | ch
by and large | generally | id
at the end of the day | ultimately | id
the bottom line is | the main point is | ch
weigh up | consider pros and cons | pv
take into account | consider | ch
come to terms with | accept something difficult | ch
miss out on | lose an opportunity | pv
look back on | think about the past | pv
regret | feel sorry about | w
if only | expressing a strong wish | ch
I wish I had | regret about the past | ch
had I known | if I had known (formal) | ch
should have | criticism of a past action | ch
could have | past possibility | ch
in hindsight | looking back now | ch
it's never too late | you can still do it | ch
a fresh start | a new beginning | ch
take the plunge | finally do something risky | id
a leap of faith | trust without proof | id
the grass is always greener | other situations seem better | id
make up for | compensate | pv
homesickness | missing home | w
red tape | excessive bureaucracy | id
bureaucracy | complex official procedures | w
small-talk culture | habit of casual chats | ch
tipping culture | habits about tipping | ch
Bonfire Night | UK celebration on 5 November | ch
Canada Day | 1 July national holiday | ch
Thanksgiving (Canada) | holiday in October in Canada | ch
loonie / toonie | $1 / $2 Canadian coins | sl
cheeky | slightly rude in a funny way (UK) | sl
sorry (as a reflex) | Canadians and Brits apologise constantly | ch
`,
  resources: [
    R.taskmaster,
    R.lukesPodcast,
    R.jacobGeller,
    R.reddit('ImmigrationCanada', 'Experiências reais de imigração para o Canadá.'),
    R.reddit('UKvisa', 'Dúvidas e experiências com vistos do UK.'),
    R.efset,
  ],
  contents: [
    {
      title: 'Taskmaster',
      kind: 'series',
      detail: 'Assista a um episódio inteiro e anote 5 exemplos de banter e understatement.',
      url: R.taskmaster.url,
    },
    {
      title: "Kim's Convenience",
      kind: 'series',
      detail: 'Cultura canadense e família imigrante.',
    },
    {
      title: 'British vs Canadian culture',
      kind: 'youtube',
      detail: 'Comparações feitas por quem morou nos dois.',
      url: ytSearch('living in uk vs canada honest comparison'),
    },
    {
      title: 'Moving abroad: regrets & lessons',
      kind: 'youtube',
      detail: 'Imigrantes contando o que fariam diferente.',
      url: ytSearch('things I wish I knew before moving to canada'),
    },
    {
      title: 'EF SET (checkpoint do ciclo)',
      kind: 'site',
      detail: 'Faça o teste gratuito no fim da semana e anote sua nota.',
      url: R.efset.url,
    },
  ],
  dailyChallenge:
    'Escolha uma pequena decisão do dia e pese os prós e contras em voz alta usando "on the one hand / having said that / at the end of the day".',
  plan: {
    shadowing: {
      clip: '60s de banter de um episódio de Taskmaster',
      resource: 'Taskmaster',
      url: R.taskmaster.url,
    },
    roleplayWork:
      'Debate numa reunião: home office vs escritório. Você defende um lado, a IA o outro, e no fim chegam a um meio-termo.',
    reading: {
      what: 'relatos de quem já se mudou (3 posts)',
      resource: 'r/ImmigrationCanada',
      url: 'https://www.reddit.com/r/ImmigrationCanada',
    },
    writingPrompt:
      'um texto argumentativo: Canadá ou Reino Unido? Prós, contras e sua conclusão (estilo IELTS Task 2).',
    interaction: {
      what: 'um episódio de Taskmaster já visto: responda às piadas e explique por que são engraçadas',
      resource: 'Taskmaster',
    },
    roleplaySocial:
      'Um colega britânico provoca você com banter; responda no mesmo tom sem levar para o lado pessoal.',
    chorusing: [
      "I see where you're coming from",
      'Having said that...',
      'At the end of the day...',
    ],
    game: {
      title: 'Jogo com escolhas (Cyberpunk, Watch Dogs)',
      prompt:
        'Em cada escolha de diálogo, pese os prós e contras em voz alta e depois comente o que teria acontecido se tivesse escolhido diferente (third conditional).',
    },
    monologue:
      'feche o ciclo: compare o seu monólogo da semana 1 com o de hoje. O que mudou? O que você faria diferente no próximo ciclo?',
  },
}
