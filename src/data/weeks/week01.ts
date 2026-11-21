import { R, ytSearch } from '../resources'
import type { WeekSource } from '../types'

export const week01: WeekSource = {
  number: 1,
  theme: 'Tell me about yourself',
  subtitle: 'Apresentações e small talk',
  emoji: '👋',
  interestHook:
    'Como o Trash Taste abre cada episódio: banter, apresentações e perguntas de volta.',
  goal: 'Se apresentar por 2 minutos sem travar e sustentar um small talk de 5 minutos.',
  grammar: {
    topic: 'Present Simple vs Present Continuous + verbos de estado',
    summary:
      'Present simple para quem você é, fatos e rotinas ("I work in IT"). Present continuous para o que está acontecendo agora ou é temporário ("I\'m studying for IELTS these days"). Verbos de estado (know, like, want, believe, need, own) quase nunca vão para -ing.',
    rules: [
      'Fatos permanentes e rotina → present simple: "I live in São Paulo."',
      'Situações temporárias ou em andamento → present continuous: "I\'m living with my parents for now."',
      'Planos futuros já combinados → present continuous: "I\'m moving to Toronto next year."',
      'Verbos de estado (know, like, love, hate, want, need, believe, understand, own) ficam no simple.',
      'Alguns verbos mudam de sentido: "I think it\'s good" (opinião) vs "I\'m thinking about it" (processo).',
    ],
    examples: [
      { en: "I'm originally from Brazil, but I'm based in São Paulo at the moment." },
      { en: "I work as a developer and I'm currently learning Rust on the side." },
      { en: "I'm really into anime. Right now I'm rewatching JoJo Part 5." },
      { en: "I don't know many people here yet, but I'm getting to know my coworkers." },
    ],
    mistakes: [
      { wrong: "I'm liking this anime a lot.", right: 'I really like this anime.' },
      { wrong: 'Where you are from?', right: 'Where are you from?' },
      { wrong: 'I am work in a tech company.', right: 'I work at a tech company.' },
      { wrong: 'I have 25 years.', right: "I'm 25 (years old)." },
    ],
    practice:
      'Escreva 6 frases sobre você: 3 no present simple (quem você é) e 3 no continuous (o que está fazendo nesta fase da vida).',
  },
  vocabRaw: `
introduce yourself | present yourself to someone new | ch
nice to meet you | standard greeting when you meet someone | ch
how's it going? | informal "how are you?" | ch
not too bad | common British reply meaning "fine" | ch
can't complain | "things are fine" (casual) | ch
cheers | thanks / bye (UK, informal) | sl
mate | friend; friendly way to address someone (UK) | sl
buddy | friend; friendly address (Canada/US) | sl
eh? | Canadian tag question: "Cold today, eh?" | sl
small talk | light, polite conversation about safe topics | ch
break the ice | start a conversation in an awkward situation | id
hit it off | like each other immediately | id
get along with | have a good relationship with | pv
originally from | born or raised in (a place) | ch
grow up | spend your childhood somewhere | pv
be based in | live or work mainly in a place | ch
hometown | the town where you grew up | w
background | your education, experience and origin | w
for a living | as your job: "What do you do for a living?" | ch
work as | have the job of | ch
be into | be very interested in | pv
a big fan of | someone who loves something | ch
hobby | activity you do for fun | w
pastime | something you do to pass time pleasantly | w
spare time | free time | ch
binge-watch | watch many episodes in a row | w
geek out over | talk about something with huge enthusiasm | pv
nerd | someone very into a niche subject (often affectionate) | sl
outgoing | friendly and sociable | w
laid-back | relaxed and calm | w
introvert | person who recharges by being alone | w
easygoing | relaxed and easy to be with | w
down-to-earth | practical and unpretentious | w
self-taught | learned without a teacher | w
keen on | enthusiastic about (UK) | ch
look forward to | feel happy about something in the future | pv
catch up | talk to update each other on news | pv
keep in touch | stay in contact | ch
by the way | introduces a new topic | ch
anyway | changes topic or returns to the main point | w
so, what about you? | returns the question to keep the chat going | ch
fair enough | "I accept that / that's reasonable" | ch
no worries | "it's fine" / "you're welcome" | ch
I reckon | I think (UK informal) | ch
to be honest | introduces a sincere opinion | ch
kind of / sort of | slightly; more or less | ch
pretty much | almost completely | ch
the thing is | introduces the main point or a problem | ch
how come? | why? (informal) | ch
sounds good | I agree / OK | ch
lovely | very nice (extremely common in the UK) | w
brilliant | great (UK) | w
awkward | embarrassing, uncomfortable | w
chilly | uncomfortably cold | w
miserable (weather) | grey, wet and cold | w
it's pouring | it's raining heavily | ch
it's freezing | it's very cold | ch
wrap up warm | wear warm clothes | ch
mutual friend | a friend you both know | ch
coworker | person you work with | w
colleague | person you work with (more formal) | w
acquaintance | someone you know, but not well | w
make friends | form friendships | ch
fit in | feel accepted in a group | pv
stand out | be very noticeable | pv
relocate | move to a new place, usually for work | w
move abroad | go to live in another country | ch
settle in | get used to a new home or job | pv
homesick | sad because you miss home | w
long story short | to summarise | ch
it's a long story | the explanation is complicated | ch
that's a fair point | polite agreement | ch
I'm still getting used to | I'm adapting to | ch
what brings you here? | why are you here? (friendly) | ch
`,
  resources: [
    R.trashTaste,
    R.lukesPodcast,
    R.taskmaster,
    R.cambridge,
    R.reddit('CasualConversation', 'Conversas leves do dia a dia. Leia e comente.'),
    R.anki,
  ],
  contents: [
    {
      title: 'Trash Taste',
      kind: 'podcast',
      detail: 'Qualquer episódio: repare como eles abrem a conversa e jogam perguntas de volta.',
      url: R.trashTaste.url,
    },
    {
      title: 'Taskmaster, Série 1, Episódio 1',
      kind: 'series',
      detail: 'Os participantes se apresentam e fazem piada de si mesmos.',
      url: R.taskmaster.url,
    },
    {
      title: '"Tell me about yourself" (respostas modelo)',
      kind: 'youtube',
      detail: 'Assista a 2 vídeos e anote estruturas que você pode copiar.',
      url: ytSearch('tell me about yourself best answer interview'),
    },
    {
      title: "Luke's English Podcast",
      kind: 'podcast',
      detail: 'Um episódio por semana no deslocamento.',
      url: R.lukesPodcast.url,
    },
    {
      title: 'Small talk no Reino Unido',
      kind: 'youtube',
      detail: 'Vídeos sobre o famoso papo sobre o tempo.',
      url: ytSearch('british small talk weather explained'),
    },
  ],
  dailyChallenge:
    'Todo dia, ao escovar os dentes, se apresente em voz baixa por 30 segundos, mudando o "público" (um recrutador, um colega de anime, um vizinho canadense).',
  plan: {
    shadowing: {
      clip: 'os primeiros 60–90s de um episódio (apresentação e banter)',
      resource: 'Trash Taste',
      url: R.trashTaste.url,
    },
    roleplayWork:
      'Primeiro dia num emprego em Toronto: você se apresenta para a equipe e responde perguntas sobre sua trajetória.',
    reading: {
      what: '3 threads de apresentação ou "what are you into?"',
      resource: 'r/CasualConversation',
      url: 'https://www.reddit.com/r/CasualConversation',
    },
    writingPrompt: 'um "About me" para LinkedIn (formal) e outro para Discord (casual).',
    interaction: {
      what: 'cenas de apresentação de personagens que você já viu (dub em inglês)',
      resource: 'Anime favorito (JoJo / Black Clover)',
    },
    roleplaySocial:
      'Small talk na fila do café em Londres: o tempo, o fim de semana, o que você faz.',
    chorusing: ["Not too bad, can't complain", 'So, what about you?', 'Fair enough'],
    game: {
      title: 'Cyberpunk 2077',
      prompt:
        'Narre a criação do seu V: quem é, de onde vem, do que gosta, como você explicaria isso a um estranho.',
    },
    monologue:
      '"Tell me about yourself": de onde você é, o que faz, seus hobbies e por que quer morar fora.',
  },
}
