import { R, ytSearch } from '../resources'
import type { WeekSource } from '../types'

export const week11: WeekSource = {
  number: 11,
  theme: 'Tell me a story',
  subtitle: 'Contar histórias, casos e enredos',
  emoji: '📖',
  interestHook:
    'JoJo, Batman e Moon Knight têm alguns dos plots mais insanos da cultura pop: conte-os direito.',
  goal: 'Contar uma história com começo, meio e fim, usando tempos verbais narrativos e conectores naturais.',
  grammar: {
    topic: 'Tempos narrativos: past simple, past continuous, past perfect, used to / would',
    summary:
      'Past simple = ações principais em sequência. Past continuous = cenário/ação em andamento quando algo aconteceu. Past perfect = algo que aconteceu ANTES de outro ponto do passado. Used to / would = hábitos do passado que não existem mais (would só com ações, não estados).',
    rules: [
      'Cenário: "It was raining and Batman was standing on the roof..."',
      'Interrupção: "...when the Joker suddenly appeared."',
      'Antes do antes: "He realised he had already lost the fight."',
      'Hábito passado: "I used to watch Dragon Ball every day after school."',
      '"Would" para rotina passada só com ações: "We would play until midnight."',
    ],
    examples: [
      { en: "I was walking home when I ran into an old friend I hadn't seen for years." },
      { en: 'Turns out, Marc had been sharing his body with Steven the whole time.' },
      { en: 'When I was a kid, I used to draw Dragon Ball characters all day.' },
      { en: 'By the time Jotaro arrived, Dio had already stopped time.' },
    ],
    mistakes: [
      {
        wrong: 'When I arrived, the movie already started.',
        right: 'When I arrived, the movie had already started.',
      },
      { wrong: 'I was knowing him since school.', right: "I'd known him since school." },
      {
        wrong: 'Eventually, he will come.',
        right: 'Maybe he\'ll come. ("eventually" = finalmente, depois de muito tempo)',
      },
      {
        wrong: 'I am used to play this game when I was a kid.',
        right: 'I used to play this game when I was a kid.',
      },
    ],
    practice:
      'Conte por escrito (150 palavras) o plot do seu arco favorito de anime ou HQ usando os 4 tempos narrativos.',
  },
  vocabRaw: `
so, basically | way to start telling a story | ch
it all started when | beginning a story | ch
out of nowhere | unexpectedly | ch
all of a sudden | suddenly | ch
meanwhile | at the same time, elsewhere | w
eventually | finally, after a long time (false friend!) | w
in the end | finally, as a result | ch
at first | at the beginning | ch
later on | at a later time | ch
it turned out that | it was discovered that | ch
to cut a long story short | to summarise | id
you won't believe what happened | hooking the listener | ch
guess what? | introduces surprising news | ch
I was like... | reporting your reaction (informal) | sl
and he goes... | and he says (informal storytelling) | sl
plot | the events of a story | w
protagonist | main character | w
villain | the bad guy | w
sidekick | the hero's helper | w
mentor | experienced guide | w
backstory | a character's past | w
character development | how a character changes | ch
foreshadowing | hints of what will happen | w
cliffhanger | exciting unresolved ending | w
flashback | scene from the past | w
story arc | a part of a larger story | ch
climax | most intense point | w
showdown | final confrontation | w
betrayal | being disloyal | w
sacrifice | giving something up for others | w
revenge | hurting someone who hurt you | w
alter ego | second identity | w
vigilante | person who fights crime illegally | w
underdog | the one expected to lose | w
power-up | increase in power | w
come back from the dead | return after dying | ch
fall apart | break into pieces; collapse | pv
turn against | become hostile to | pv
set out to | start with a goal | pv
end up | finally be in a situation | pv
make it | succeed / survive | ch
give in | stop resisting | pv
stand up to | confront someone powerful | pv
take down | defeat | pv
run into | meet by chance | pv
figure out | understand / solve | pv
find out | discover | pv
it dawned on me | I suddenly realised | id
the last straw | the final problem that makes you react | id
in the nick of time | at the last possible moment | id
against all odds | despite low chances | id
on the edge of my seat | very excited/tense | id
it blew my mind | it amazed me | id
it gave me chills | it gave me goosebumps | ch
I couldn't believe my eyes | I was shocked by what I saw | ch
gripping | very exciting | w
heartbreaking | very sad | w
hilarious | very funny | w
creepy | scary in a strange way | w
iconic | very famous and representative | w
over the top | exaggerated | id
used to | past habit or state | ch
would (past habit) | repeated past action | ch
had already | before another past moment | ch
by the time | before / when | ch
as soon as | immediately when | ch
while | during the time that | w
the moment | exactly when | ch
little did he know | he had no idea (dramatic) | ch
plot hole | logical error in a story | ch
spoiler | information that reveals the ending | w
lore-wise | regarding the lore | sl
`,
  resources: [
    R.comicTropes,
    R.comicsExplained,
    R.marvelUnlimited,
    R.eyepatchWolf,
    R.reddit('StardustCrusaders', 'Comunidade de JoJo: teorias e discussões.'),
    R.anki,
  ],
  contents: [
    {
      title: 'Moon Knight (série, áudio original)',
      kind: 'series',
      detail: 'Steven tem sotaque britânico: ótimo para shadowing.',
    },
    {
      title: 'Batman: Year One (HQ, DC)',
      kind: 'comic',
      detail: 'Leia no original (DC Universe Infinite), curto e denso.',
    },
    {
      title: 'Comics Explained',
      kind: 'youtube',
      detail: 'Resumos de arcos: modelo de como contar plot.',
      url: R.comicsExplained.url,
    },
    { title: 'JoJo (dub)', kind: 'series', detail: 'Escolha um arco e reconte depois.' },
    {
      title: 'Storytelling tips (how to tell a story)',
      kind: 'youtube',
      detail: 'Como contar casos de forma envolvente.',
      url: ytSearch('how to tell a story in english conversation'),
    },
  ],
  dailyChallenge:
    'Todo dia, conte em voz alta uma mini história de 1 minuto: algo que aconteceu hoje, uma lembrança de infância ou uma cena de anime.',
  plan: {
    shadowing: {
      clip: '60s de uma cena do Steven Grant (sotaque britânico)',
      resource: 'Moon Knight',
      url: ytSearch('moon knight steven grant scene'),
    },
    roleplayWork:
      'Num almoço com colegas, conte como foi sua decisão de se mudar para o exterior, do começo ao fim.',
    reading: {
      what: 'o primeiro capítulo de Moon Knight (2014) ou Batman: Year One',
      resource: 'Marvel Unlimited / DC Universe Infinite',
      url: R.marvelUnlimited.url,
    },
    writingPrompt: 'a história mais engraçada ou estranha que já aconteceu com você.',
    interaction: {
      what: 'um vídeo de resumo de arco: pause e conte o que vem antes do narrador',
      resource: 'Comics Explained / Comic Tropes',
    },
    roleplaySocial:
      'Pub com amigos: cada um conta uma história embaraçosa; a IA reage e faz perguntas.',
    chorusing: ["You won't believe what happened", 'Long story short...', 'It turned out that...'],
    game: {
      title: 'Qualquer jogo com história (Cyberpunk, OMORI)',
      prompt: 'Narre a cena como um contador de histórias, com tempos narrativos e suspense.',
    },
    monologue:
      'reconte o plot do seu anime favorito para alguém que nunca assistiu (sem spoilers do final!).',
  },
}
