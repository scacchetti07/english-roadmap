import { R, ytSearch } from '../resources'
import type { WeekSource } from '../types'

export const week02: WeekSource = {
  number: 2,
  theme: 'Home sweet home',
  subtitle: 'Rotina, tarefas de casa e objetos do dia a dia',
  emoji: '🏠',
  interestHook:
    'OMORI se passa quase todo dentro de casas e quartos: perfeito para o vocabulário doméstico.',
  goal: 'Narrar sua rotina inteira e nomear qualquer objeto da sua casa em inglês.',
  grammar: {
    topic: 'Phrasal verbs: separáveis e inseparáveis',
    summary:
      'Phrasal verbs são verbo + partícula com sentido próprio. Nos separáveis, o objeto pode ir no meio ("turn the light off"), e se for pronome TEM que ir no meio ("turn it off"). Nos inseparáveis, o objeto sempre vem depois ("look after the cat / look after it").',
    rules: [
      'Separável com substantivo: "put on your jacket" ou "put your jacket on".',
      'Separável com pronome: só no meio, "put it on" (nunca "put on it").',
      'Inseparáveis comuns: look after, get over, run into, deal with, come across.',
      'Intransitivos (sem objeto): wake up, get up, wind down, doze off.',
      'Dica: aprenda sempre com um exemplo completo, nunca o verbo solto.',
    ],
    examples: [
      { en: 'I usually hit the snooze button twice before I actually get up.' },
      { en: "Can you turn the heating down? It's boiling in here." },
      { en: "I keep putting off the laundry. I'll get around to it tonight." },
      { en: "Throw your hoodie on, we're late!" },
    ],
    mistakes: [
      { wrong: 'Turn off it, please.', right: 'Turn it off, please.' },
      { wrong: 'I need to make the laundry.', right: 'I need to do the laundry.' },
      { wrong: 'I woke up early and stood up at 6.', right: 'I woke up early and got up at 6.' },
      { wrong: 'Can you take out the trash it?', right: 'Can you take it out?' },
    ],
    practice:
      'Descreva sua manhã de hoje usando pelo menos 8 phrasal verbs, dois deles com pronome (turn it off, put it on).',
  },
  vocabRaw: `
wake up | stop sleeping | pv
get up | get out of bed | pv
oversleep | sleep longer than you intended | w
hit the snooze button | press the alarm to sleep a few more minutes | ch
make the bed | arrange the sheets after sleeping | ch
get dressed | put your clothes on | ch
put on | start wearing (clothes) | pv
take off | remove (clothes, shoes) | pv
throw on | put clothes on quickly | pv
grab a bite | eat something quickly | ch
run late | be behind schedule | ch
do the dishes | wash plates, cups etc. | ch
do the laundry | wash clothes | ch
load the dishwasher | put dirty dishes in the machine | ch
hang out the washing | hang wet clothes to dry (UK) | ch
fold the clothes | arrange clothes neatly | ch
iron | press clothes with a hot appliance | w
hoover / vacuum | clean the floor with a machine (hoover = UK) | w
sweep the floor | clean with a broom | ch
mop | clean the floor with a wet mop | w
dust | remove dust from surfaces | w
tidy up | make a place neat | pv
clean up | clean a mess | pv
take out the bins | take rubbish outside (UK); "take out the trash" (CA/US) | ch
chores | regular household tasks | w
clutter | an untidy collection of things | w
messy | untidy | w
spotless | perfectly clean | w
cupboard | storage with doors, especially in the kitchen (UK) | w
drawer | sliding box in furniture | w
shelf | flat board to keep things on | w
wardrobe / closet | place for clothes (UK / CA-US) | w
duvet | thick bed cover (UK) | w
pillowcase | cloth cover for a pillow | w
kettle | electric water boiler (essential in UK homes) | w
hob / stovetop | cooking surface (UK / CA-US) | w
sink | basin with a tap for washing | w
tap / faucet | where water comes out (UK / CA-US) | w
dish rack | rack where washed dishes dry | ch
plug | device that connects to electricity; sink stopper | w
socket / outlet | where you plug things in (UK / CA-US) | w
light switch | button that turns the light on/off | ch
radiator | metal heater full of hot water | w
thermostat | device that controls the temperature | w
turn on / turn off | start / stop a device | pv
turn up / turn down | increase / decrease volume or temperature | pv
switch off | turn off | pv
leak | water escaping from a pipe | w
fix | repair | w
jammed | stuck, can't move (door, printer) | w
clogged | blocked (drain, sink) | w
plumber | person who fixes pipes | w
flatmate / roommate | person you share a home with (UK / CA-US) | w
chill out | relax | pv
wind down | relax after activity | pv
doze off | fall asleep without meaning to | pv
stay up late | not go to bed until late | ch
pull an all-nighter | stay awake all night | id
night owl | person who likes staying up late | id
early bird | person who wakes up early | id
on weekdays | from Monday to Friday | ch
every other day | on alternate days | ch
once in a while | occasionally | ch
put off | postpone | pv
get around to | finally do something you've been delaying | pv
set the alarm | program the alarm clock | ch
run out of | have no more left | pv
top up | fill again / add more | pv
water the plants | give plants water | ch
feed the cat | give food to the cat | ch
it's boiling in here | it's very hot in this room | ch
I'm knackered | I'm exhausted (UK) | sl
home-cooked meal | food made at home | ch
lie in | stay in bed later than usual (UK) | pv
`,
  resources: [
    R.cambridge,
    R.youglish,
    R.lukesPodcast,
    R.sixMinute,
    R.reddit('OMORI', 'Discussões sobre o jogo: leia teorias e comentários.'),
    R.anki,
  ],
  contents: [
    {
      title: 'OMORI (jogo)',
      kind: 'game',
      detail: 'Jogue em inglês e minere frases dos diálogos dentro das casas.',
    },
    {
      title: '"Day in my life" vlogs (UK)',
      kind: 'youtube',
      detail: 'Rotinas reais narradas em inglês britânico.',
      url: ytSearch('day in my life london vlog'),
    },
    {
      title: 'BBC 6 Minute English',
      kind: 'podcast',
      detail: 'Escolha episódios sobre casa, sono ou rotina.',
      url: R.sixMinute.url,
    },
    {
      title: '"Things in the house" vocabulary',
      kind: 'youtube',
      detail: 'Um vídeo com objetos da casa para checar o que você não sabia.',
      url: ytSearch('household items vocabulary british english'),
    },
    {
      title: "Luke's English Podcast",
      kind: 'podcast',
      detail: 'Um episódio no deslocamento.',
      url: R.lukesPodcast.url,
    },
  ],
  dailyChallenge:
    'Caçada de palavras: toda vez que não souber o nome de um objeto da casa, anote em LACUNAS e pesquise na hora (Google Imagens em inglês).',
  plan: {
    shadowing: {
      clip: 'um trecho de 60s de um vlog "day in my life"',
      resource: 'YouTube (vlog UK)',
      url: ytSearch('day in my life london vlog'),
    },
    roleplayWork:
      'Você divide casa com um colega de trabalho e precisam combinar a divisão das tarefas domésticas.',
    reading: {
      what: 'uma thread com teorias sobre a casa do Sunny',
      resource: 'r/OMORI',
      url: 'https://www.reddit.com/r/OMORI',
    },
    writingPrompt:
      'descreva sua rotina de um dia útil, do despertador até dormir, com phrasal verbs.',
    interaction: {
      what: 'cenas dentro de casa num anime ou jogo já visto',
      resource: 'OMORI / anime favorito',
    },
    roleplaySocial:
      'Você liga para o landlord para relatar um vazamento na pia e uma porta emperrada.',
    chorusing: ["I'll get around to it", 'Can you turn it down?', "I'm knackered"],
    game: {
      title: 'OMORI',
      prompt: 'Descreva cada cômodo e objeto que aparece, e o que os personagens estão fazendo.',
    },
    monologue: 'sua rotina ideal de fim de semana, do acordar ao dormir.',
  },
}
