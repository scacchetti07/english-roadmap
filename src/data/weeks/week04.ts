import { R, ytSearch } from '../resources'
import type { WeekSource } from '../types'

export const week04: WeekSource = {
  number: 4,
  theme: 'Getting around',
  subtitle: 'Transporte, direções e a cidade',
  emoji: '🚇',
  interestHook:
    'Watch Dogs: Legion se passa em Londres: explore o mapa e aprenda os nomes reais da cidade.',
  goal: 'Pedir e dar direções, usar transporte público e resolver imprevistos (atrasos, ônibus perdido).',
  grammar: {
    topic: 'Preposições de lugar e de movimento',
    summary:
      'Lugar: in (dentro/cidade/país), on (superfície/rua no US/linha de transporte), at (ponto específico). Movimento: across (de um lado ao outro), through (por dentro), along (ao longo), past (passar por), towards (em direção a), into/out of.',
    rules: [
      'at the station / at the bus stop / at the corner (ponto exato).',
      'in London / in the car / in a taxi; on the bus / on the train / on the Tube.',
      'get in/out of a car or taxi; get on/off a bus, train or plane.',
      'Walk across the bridge, through the park, along the river, past the church.',
      'Endereço: "on Oxford Street", mas "at 221B Baker Street".',
    ],
    examples: [
      { en: 'Go straight on, walk past the church and the station is on your left.' },
      { en: "I'll get off at King's Cross and change to the Northern line." },
      { en: "It's a five-minute walk from here, just across the road." },
      { en: "Sorry I'm late, I missed the bus and the next one was packed." },
    ],
    mistakes: [
      { wrong: 'I entered in the bus.', right: 'I got on the bus.' },
      { wrong: 'I arrived in the station.', right: 'I arrived at the station.' },
      { wrong: 'I go to work by foot.', right: 'I go to work on foot. / I walk to work.' },
      {
        wrong: 'Can you give me a ride until the station?',
        right: 'Can you give me a lift to the station?',
      },
    ],
    practice:
      'Explique como ir da sua casa até um lugar que você frequenta, usando pelo menos 6 preposições de movimento.',
  },
  vocabRaw: `
public transport / transit | buses, trains, metro (UK / CA) | ch
the Tube | the London Underground | w
the subway | the metro (Toronto, US) | w
Oyster card | London's travel payment card | ch
Presto card | Toronto/Ontario transit card | ch
contactless | paying by tapping your card or phone | w
top up | add money to a card | pv
fare | price of a journey | w
single / return ticket | one-way / round trip (UK) | ch
round trip | there and back (CA/US) | ch
platform | where you wait for the train | w
change at | switch lines at a station | ch
transfer | change vehicles (CA) | w
the next stop is | announcement on buses/trains | ch
mind the gap | London Tube warning | ch
rush hour | busiest travel time | ch
packed | very crowded | w
delayed | late | w
cancelled | not happening anymore | w
miss the bus | arrive too late for it | ch
catch the bus | get on it in time | ch
get on / get off | board / leave a bus, train or plane | pv
get in / get out of | enter / leave a car or taxi | pv
pick someone up | collect someone by car | pv
drop someone off | take someone somewhere by car and leave | pv
give someone a lift / a ride | drive someone (UK / CA-US) | ch
cab | taxi | w
rideshare | Uber-type service | w
pavement / sidewalk | path for pedestrians (UK / CA-US) | w
crossroads / intersection | where roads cross (UK / CA-US) | w
traffic lights | red, amber and green lights | ch
zebra crossing / crosswalk | pedestrian crossing (UK / CA-US) | ch
roundabout | circular junction (very common in the UK) | w
block | area between streets: "two blocks away" (CA/US) | w
high street / main street | main shopping street (UK / CA) | ch
neighbourhood | area of a city | w
downtown | city centre (CA/US) | w
city centre | the central area (UK) | ch
outskirts | edge of a city | w
suburbs | residential areas outside the centre | w
landmark | famous building used as a reference | w
How do I get to...? | asking for directions | ch
go straight on | continue forward (UK) | ch
take the second left | turn at the second street on the left | ch
it's on your left | it's on the left side | ch
opposite / across from | facing (UK / CA-US) | ch
around the corner | very near | ch
a five-minute walk | five minutes on foot | ch
within walking distance | close enough to walk | ch
get lost | not know where you are | ch
find your way around | learn to navigate a place | ch
head to | go towards | pv
along | following the length of | w
through | from one end to the other of | w
across | from one side to the other | w
past | going beyond something | w
towards | in the direction of | w
journey | a trip, especially a regular one (UK) | w
commute | daily trip to work | w
cycle lane / bike lane | lane for bicycles (UK / CA) | ch
driving licence | permission to drive (UK); "driver's license" (CA) | ch
pull over | stop the car at the side | pv
speed up / slow down | go faster / slower | pv
run a red light | ignore a red light | ch
traffic jam | many cars stopped | ch
roadworks | construction on the road (UK) | w
diversion / detour | alternative route (UK / CA-US) | w
fill up | put fuel in the car | pv
petrol / gas | fuel (UK / CA-US) | w
car park / parking lot | place to park (UK / CA-US) | ch
signal | the bus/phone signal; also to indicate | w
I'm on my way | I'm coming | ch
running ten minutes late | I'll be 10 minutes late | ch
Does this bus go to...? | asking a driver | ch
`,
  resources: [
    R.tfl,
    R.ttc,
    R.youglish,
    R.sixMinute,
    R.reddit('london', 'Moradores falando da cidade, transporte e problemas reais.'),
    R.anki,
  ],
  contents: [
    {
      title: 'Watch Dogs: Legion',
      kind: 'game',
      detail: 'Londres no jogo: leia as placas e nomes de bairros em voz alta.',
    },
    {
      title: 'London Underground explained',
      kind: 'youtube',
      detail: 'Como funciona o Tube.',
      url: ytSearch('how the london underground works explained'),
    },
    {
      title: 'Toronto TTC guide',
      kind: 'youtube',
      detail: 'Como usar o transporte de Toronto.',
      url: ytSearch('how to use TTC toronto subway guide'),
    },
    {
      title: 'Tom Scott (vídeos sobre lugares)',
      kind: 'youtube',
      detail: 'Britânico, fala clara, curiosidades sobre lugares.',
      url: ytSearch('Tom Scott london'),
    },
    {
      title: 'Asking for directions (role-play videos)',
      kind: 'youtube',
      detail: 'Diálogos reais para chorusing.',
      url: ytSearch('asking for directions in english native conversation'),
    },
  ],
  dailyChallenge:
    'No trajeto do dia, narre mentalmente o caminho em inglês: onde vira, o que passa, quanto tempo falta.',
  plan: {
    shadowing: {
      clip: '60s de um guia sobre o Tube ou o TTC',
      resource: 'YouTube',
      url: ytSearch('how the london underground works explained'),
    },
    roleplayWork:
      'Você está atrasado para uma entrevista: ligue para o recrutador, explique o atraso do metrô e combine um novo horário.',
    reading: {
      what: 'a página de tarifas e de status das linhas',
      resource: 'TfL',
      url: R.tfl.url,
    },
    writingPrompt: 'instruções para um amigo estrangeiro chegar do aeroporto até sua casa.',
    interaction: {
      what: 'cenas de perseguição e navegação pela cidade',
      resource: 'Watch Dogs / Cyberpunk',
    },
    roleplaySocial:
      'Um turista pede direções em Londres e você ajuda; depois você pede direções a um local em Toronto.',
    chorusing: [
      'Go straight on and take the second left',
      "I'm running ten minutes late",
      "It's within walking distance",
    ],
    game: {
      title: 'Watch Dogs: Legion',
      prompt: 'Dirija ou ande por Londres explicando o caminho como um GPS humano.',
    },
    monologue:
      'como é o transporte na sua cidade e o que você espera do transporte em Toronto ou Londres.',
  },
}
