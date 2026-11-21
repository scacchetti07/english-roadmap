import { R, ytSearch } from '../resources'
import type { WeekSource } from '../types'

export const week05: WeekSource = {
  number: 5,
  theme: 'Finding a place to live',
  subtitle: 'Alugar apartamento, contrato e problemas',
  emoji: '🔑',
  interestHook:
    'O apartamento do V no Megabuilding H10 vs um basement apartment em Toronto: qual é pior?',
  goal: 'Agendar visita, negociar aluguel, entender um contrato e reclamar de problemas com o landlord.',
  grammar: {
    topic: 'Modais de obrigação e permissão',
    summary:
      "Must = obrigação que vem de quem fala ou regras escritas. Have to = obrigação externa (o mais comum na fala). Don't have to = não é necessário. Mustn't = proibido. Be allowed to / can = permissão. Be supposed to = é o esperado (mas nem sempre acontece).",
    rules: [
      '"You have to pay the deposit before moving in." (regra externa)',
      '"You don\'t have to pay for utilities, they\'re included." (não precisa)',
      '"You mustn\'t smoke inside." = proibido. Cuidado: "don\'t have to" ≠ "mustn\'t".',
      '"Are pets allowed?" / "Are we allowed to paint the walls?"',
      '"The landlord is supposed to fix it within a week." (expectativa)',
    ],
    examples: [
      { en: "Do I have to give two months' notice if I want to move out?" },
      { en: "We're not allowed to have pets, but we can smoke on the balcony." },
      { en: "The heating was supposed to be fixed last week, but it still doesn't work." },
      { en: "You don't have to pay council tax if you're a full-time student." },
    ],
    mistakes: [
      {
        wrong: "You mustn't pay the bills, they're included.",
        right: "You don't have to pay the bills, they're included.",
      },
      { wrong: 'Is it permitted to have a cat?', right: 'Are pets allowed? / Can I have a cat?' },
      { wrong: 'I must to pay the rent.', right: 'I have to pay the rent.' },
      { wrong: 'The owner of the apartment', right: 'The landlord' },
    ],
    practice:
      'Escreva as "house rules" de um apartamento compartilhado usando have to, don\'t have to, mustn\'t, be allowed to e be supposed to.',
  },
  vocabRaw: `
rent | money you pay to live somewhere; to pay to use | w
to let | available to rent (UK sign) | ch
flat | apartment (UK) | w
studio | one-room apartment | w
house share | sharing a house with others (UK) | ch
landlord / landlady | person who rents a property to you | w
letting agent | company that manages rentals (UK) | ch
property manager | person/company that manages a building (CA) | ch
tenant | person who rents | w
tenancy agreement / lease | rental contract (UK / CA) | ch
deposit | money held as security | w
first and last month's rent | common upfront payment in Ontario | ch
bills included | utilities are in the rent | ch
utilities | water, gas, electricity | w
council tax | local tax paid by residents in the UK | ch
furnished / unfurnished | with / without furniture | w
viewing | visit to see a property (UK) | w
showing | visit to see a property (CA) | w
move in / move out | start / stop living somewhere | pv
sign the lease | sign the contract | ch
reference | letter recommending you | w
credit check | check of your financial history | ch
guarantor | person who pays if you can't | w
notice period | time you must warn before leaving | ch
give notice | officially say you will leave | ch
evict | legally force a tenant out | w
break the lease | end the contract early | ch
sublet | rent your place to someone else | w
maintenance request | asking the landlord to fix something | ch
mould / mold | fungus on damp walls (UK / CA-US) | w
damp | slightly wet | w
heating | system that warms the home | w
boiler | heats water and radiators (UK) | w
furnace | central heating system (CA) | w
insulation | material that keeps heat in | w
draughty / drafty | cold air comes in (UK / CA-US) | w
pests | insects or animals in the home | w
noisy neighbours | loud people next door | ch
soundproof | blocks noise | w
spacious | big, lots of space | w
cramped | too small | w
cosy | warm and comfortable | w
en suite | bathroom attached to the bedroom (UK) | w
basement apartment | flat below ground level (common in Canada) | ch
in-suite laundry | washing machine inside the apartment (CA) | ch
parking spot | place to park | ch
amenities | facilities like a gym or pool | w
pet-friendly | pets are allowed | w
be allowed to | have permission | ch
have to | need to (external obligation) | ch
don't have to | it's not necessary | ch
mustn't | it's prohibited | w
be supposed to | be expected to | ch
rent goes up | the price increases | ch
haggle | negotiate a price | w
a good deal | a good price | ch
rip-off | far too expensive | sl
pricey | expensive | w
affordable | not too expensive | w
afford | have enough money for | w
split the rent | share the cost | ch
spare key | extra key | ch
lock yourself out | get stuck outside without your key | ch
handyman | person who does small repairs | w
I'd like to arrange a viewing | asking to see a flat | ch
Is the deposit refundable? | asking if you get it back | ch
When is the earliest I can move in? | asking about dates | ch
walk-up | building without an elevator | w
lift / elevator | (UK / CA-US) | w
ground floor / first floor | street level (UK) / street level (CA-US) | ch
it's a steal | it's very cheap for what it is | id
`,
  resources: [
    R.govUkRenting,
    R.canadaNewcomers,
    R.reddit('askTO', 'Torontonianos discutindo aluguel, bairros e preços.'),
    R.reddit('HousingUK', 'Problemas reais de inquilinos no UK.'),
    R.youglish,
    R.anki,
  ],
  contents: [
    {
      title: 'Apartment tours (Toronto)',
      kind: 'youtube',
      detail: 'Tours narrados com preços e vocabulário real.',
      url: ytSearch('toronto apartment tour rent price'),
    },
    {
      title: 'London flat tours',
      kind: 'youtube',
      detail: 'Compare tamanho e preço em Londres.',
      url: ytSearch('london flat tour rent price'),
    },
    {
      title: 'GOV.UK: Private renting',
      kind: 'reading',
      detail: 'Direitos e deveres de inquilinos.',
      url: R.govUkRenting.url,
    },
    {
      title: "Kim's Convenience (série canadense)",
      kind: 'series',
      detail: 'Vida cotidiana em Toronto com humor.',
    },
    {
      title: 'Cyberpunk: Edgerunners (dub)',
      kind: 'series',
      detail: 'Repare em como os personagens falam sobre onde moram e dinheiro.',
    },
  ],
  dailyChallenge:
    'Olhe ao redor do seu quarto ou casa e descreva em voz alta como num anúncio: "Spacious, bright, a bit cramped..."',
  plan: {
    shadowing: {
      clip: '60s de um apartment tour em Toronto',
      resource: 'YouTube',
      url: ytSearch('toronto apartment tour rent price'),
    },
    roleplayWork:
      'Ligação com um property manager em Toronto: agendar uma showing e perguntar sobre depósito, utilities e lease.',
    reading: {
      what: 'a seção sobre depósitos e reparos',
      resource: 'GOV.UK Private renting',
      url: R.govUkRenting.url,
    },
    writingPrompt:
      'um e-mail formal ao landlord relatando mofo e aquecimento quebrado e pedindo prazo de conserto.',
    interaction: {
      what: 'cenas de apartamentos e vizinhos',
      resource: "Cyberpunk: Edgerunners / Kim's Convenience",
    },
    roleplaySocial:
      'Você negocia com um futuro flatmate as regras da casa: visitas, limpeza, contas.',
    chorusing: ["I'd like to arrange a viewing", 'Is the deposit refundable?', 'Are pets allowed?'],
    game: {
      title: 'Cyberpunk 2077',
      prompt:
        'Faça um "apartment tour" do apartamento do V como um corretor tentando vender o lugar.',
    },
    monologue:
      'descreva o apartamento ideal para você no exterior e quanto estaria disposto a pagar.',
  },
}
