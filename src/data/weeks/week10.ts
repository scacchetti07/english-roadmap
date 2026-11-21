import { R, ytSearch } from '../resources'
import type { WeekSource } from '../types'

export const week10: WeekSource = {
  number: 10,
  theme: 'Tech & gaming talk',
  subtitle: 'Opinar, comparar e recomendar games e tecnologia',
  emoji: '🎮',
  interestHook:
    'Cyberpunk 2077, Watch Dogs e OMORI: defenda seus jogos favoritos como um reviewer.',
  goal: 'Dar opiniões detalhadas, comparar e recomendar jogos e produtos com vocabulário rico e gírias atuais.',
  grammar: {
    topic: 'Relative clauses (defining e non-defining)',
    summary:
      'Orações relativas dão informação extra sobre algo: who (pessoas), which (coisas), that (pessoas ou coisas, só em defining), whose (posse), where (lugares). Defining = essencial, sem vírgulas. Non-defining = extra, com vírgulas e nunca com "that".',
    rules: [
      'Defining: "It\'s the game that made me love RPGs." (sem vírgulas)',
      'Non-defining: "Cyberpunk, which had a terrible launch, is now great." (com vírgulas, sem "that")',
      'whose = posse: "a developer whose games are always weird".',
      'where = lugar: "Night City, where the game takes place".',
      'Pode omitir o pronome quando ele é objeto: "the GPU (that) I bought".',
    ],
    examples: [
      { en: 'Cyberpunk 2077, which was a mess at launch, is now one of my favourite games.' },
      { en: 'OMORI is the kind of game that stays with you for weeks.' },
      { en: 'Edgerunners is a show whose soundtrack absolutely slaps.' },
      { en: "The build I'm running right now is basically a netrunner with a katana." },
    ],
    mistakes: [
      { wrong: 'The game what I bought is great.', right: 'The game (that) I bought is great.' },
      {
        wrong: 'Cyberpunk, that I love, is amazing.',
        right: 'Cyberpunk, which I love, is amazing.',
      },
      { wrong: 'The person which made this game...', right: 'The person who made this game...' },
      {
        wrong: 'This game is very boring, is a bad game.',
        right: "This game is really boring. It's just not good.",
      },
    ],
    practice:
      'Escreva uma mini review (5 frases) do seu jogo favorito usando who, which, that, whose e where.',
  },
  vocabRaw: `
gameplay | how a game plays | w
storyline | the story of a game | w
plot twist | surprising change in the story | ch
lore | background world and history | w
open world | game where you explore freely | ch
side quest | optional mission | ch
grind | do repetitive tasks to progress | sl
level up | go to a higher level | pv
skill tree | system of unlockable abilities | ch
build | your character's configuration | w
loadout | equipment you take into a mission | w
patch | update that fixes problems | w
glitch | small bug | w
game-breaking | so bad it stops you playing | w
crash | stop working suddenly | w
frame rate | frames per second (FPS) | ch
lag | delay in response | w
optimised | runs efficiently | w
replay value | worth playing again | ch
immersive | makes you feel inside the world | w
atmospheric | creates a strong mood | w
underrated | better than people think | w
overrated | worse than people think | w
masterpiece | outstanding work | w
mid | mediocre (slang) | sl
peak | excellent (slang) | sl
cringe | embarrassing (slang) | sl
it slaps | it's really good (slang) | sl
GOATed | the greatest of all time (slang) | sl
no spoilers | don't reveal the story | ch
overhyped | with too much hype | w
live up to the hype | be as good as expected | ch
redemption arc | story where something/someone redeems itself | ch
a slow burn | starts slow, gets better | ch
gaming rig | powerful gaming PC | ch
specs | technical specifications | w
upgrade | improve to a better version | w
graphics card | GPU | ch
bottleneck | component limiting performance | w
release date | launch date | ch
early access | play before full release | ch
microtransactions | small in-game purchases | w
pay-to-win | you win by spending money | w
indie game | game by a small studio | ch
dev | developer | w
open source | code freely available | ch
repo | code repository | w
pull request | proposed code change | ch
debug | find and fix bugs | w
refactor | restructure code without changing behaviour | w
under the hood | internally | id
cutting-edge | very modern | w
user-friendly | easy to use | w
game-changer | something that changes everything | w
it's not my cup of tea | I don't like it | id
I can't get into it | I can't enjoy it | ch
it grew on me | I liked it more over time | ch
hooked on | addicted to | ch
it's worth it | it's worth the time/money | ch
hands down | without doubt | id
what I love about it is | introducing a positive | ch
the thing that bugs me is | introducing a negative | ch
to be fair | being balanced | ch
a must-play | essential game | ch
clunky | awkward to use | w
polished | refined, well-finished | w
janky | buggy, unstable (informal) | sl
soundtrack | music of a game/show | w
voice acting | performance of voice actors | ch
side note | additional comment | ch
I'd highly recommend | strong recommendation | ch
fan service | content made to please fans | ch
`,
  resources: [
    R.gmtk,
    R.noclip,
    R.mrwho,
    R.fireship,
    R.reddit('cyberpunkgame', 'Comunidade de Cyberpunk 2077.'),
    R.anki,
  ],
  contents: [
    {
      title: "Game Maker's Toolkit",
      kind: 'youtube',
      detail: 'Ótimo para vocabulário de design de jogos.',
      url: R.gmtk.url,
    },
    {
      title: 'Cyberpunk 2077: redemption documentary',
      kind: 'youtube',
      detail: 'A história do lançamento ruim à recuperação.',
      url: ytSearch('cyberpunk 2077 redemption story documentary'),
    },
    {
      title: 'Mrwhosetheboss',
      kind: 'youtube',
      detail: 'Reviews de produtos (britânico).',
      url: R.mrwho.url,
    },
    {
      title: 'Cyberpunk: Edgerunners (dub)',
      kind: 'series',
      detail: 'Reveja com áudio em inglês.',
    },
    {
      title: 'OMORI review / analysis',
      kind: 'youtube',
      detail: 'Assista a uma análise e compare com sua opinião.',
      url: ytSearch('omori analysis video essay'),
    },
  ],
  dailyChallenge:
    'Toda vez que abrir um jogo ou app, dê uma "nota" de 1 frase em inglês sobre ele usando uma relative clause.',
  plan: {
    shadowing: {
      clip: '60–90s de um vídeo do GMTK',
      resource: "Game Maker's Toolkit",
      url: R.gmtk.url,
    },
    roleplayWork:
      'Reunião de produto: você defende uma feature para um app ou jogo e responde objeções do PM.',
    reading: {
      what: 'um post longo com opinião sobre a versão atual do jogo',
      resource: 'r/cyberpunkgame',
      url: 'https://www.reddit.com/r/cyberpunkgame',
    },
    writingPrompt:
      'uma review de Steam (120–150 palavras) de um jogo que você ama, e poste de verdade se quiser.',
    interaction: {
      what: 'um vídeo de review: pause e concorde ou discorde de cada ponto',
      resource: 'YouTube (review de jogo)',
    },
    roleplaySocial: 'Você convence um amigo que não joga a experimentar Cyberpunk ou OMORI.',
    chorusing: [
      'It really grew on me',
      'Hands down, one of the best',
      'The thing that bugs me is...',
    ],
    game: {
      title: 'Cyberpunk 2077',
      prompt: 'Faça uma "review ao vivo": gameplay, gráficos, história, o que melhoraria.',
    },
    monologue: 'o jogo, anime ou HQ que mais te marcou e por quê (estilo video-ensaio).',
  },
}
