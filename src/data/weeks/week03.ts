import { R, ytSearch } from '../resources'
import type { WeekSource } from '../types'

export const week03: WeekSource = {
  number: 3,
  theme: 'Food, pubs & eating out',
  subtitle: 'Restaurantes, mercado e cozinha',
  emoji: '🍔',
  interestHook: 'Goku comendo 40 pratos seguidos: hora de saber pedir comida melhor que ele.',
  goal: 'Pedir comida, lidar com problemas no restaurante e explicar uma receita em inglês.',
  grammar: {
    topic: 'Contáveis vs incontáveis + quantificadores + pedidos educados',
    summary:
      'Incontáveis (water, bread, advice, food, money) não têm plural nem "a". Use much/a little com incontáveis e many/a few com contáveis. "Some" em afirmações e ofertas, "any" em negativas e perguntas. Para pedir, "Could I get...?" e "I\'ll have..." soam naturais; "I want" soa rude.',
    rules: [
      'Contável: a burger, two burgers, many burgers, a few burgers.',
      'Incontável: some bread, a piece of bread, much bread, a little bread.',
      '"A lot of / lots of / plenty of" funcionam com os dois.',
      'Ofertas e pedidos usam "some": "Would you like some water?"',
      'Pedir com educação: "Could I get...?", "I\'ll have...", "Can I have... please?"',
    ],
    examples: [
      { en: 'Could I get the fish and chips, please? And some tap water.' },
      { en: "There isn't much food left, just a few slices of pizza." },
      { en: "I'm stuffed, but I've always got room for a little dessert." },
      { en: "Shall we split the bill? Actually, it's on me." },
    ],
    mistakes: [
      { wrong: 'Can you give me an advice?', right: 'Can you give me some advice?' },
      { wrong: 'I want a coke.', right: 'Could I get a Coke, please?' },
      { wrong: 'The foods here are great.', right: 'The food here is great.' },
      { wrong: 'Can you bring the count?', right: 'Could we have the bill, please?' },
    ],
    practice:
      'Escreva um diálogo completo num pub: chegar, pedir mesa, perguntar recomendação, pedir, reclamar de algo e pagar.',
  },
  vocabRaw: `
starter | first course of a meal (UK) | w
appetizer | first course of a meal (CA/US) | w
main course | the main dish | ch
pudding | any dessert (UK, informal) | w
side dish | small dish served with the main | ch
the bill / the check | what you pay at the end (UK / CA-US) | ch
tip | extra money for the service | w
service charge | fee added to the bill (UK) | ch
book a table | reserve a table | ch
a table for two | asking for a table | ch
takeaway / takeout | food to take home (UK / CA-US) | w
I'll have the... | way to order | ch
Could I get...? | polite way to order | ch
What do you recommend? | asking for a suggestion | ch
I'm allergic to | I react badly to (a food) | ch
dietary requirements | food restrictions (vegan, halal etc.) | ch
gluten-free | without gluten | w
on the side | served separately | ch
well done / medium / rare | how cooked a steak is | ch
still or sparkling? | type of water | ch
tap water | free water from the tap | ch
refill | another serving of a drink | w
pint | beer measure in pubs (UK) | w
it's my round | I'll buy drinks for the group this time | ch
pub grub | basic pub food | sl
fish and chips | classic British fried fish with chips | ch
Sunday roast | traditional British Sunday meal | ch
poutine | fries with cheese curds and gravy (Canada) | w
Timmies | Tim Hortons, Canadian coffee chain | sl
double-double | coffee with two creams, two sugars (CA) | sl
cuppa | a cup of tea (UK) | sl
food shop | shopping for food (UK); "grocery run" (CA) | ch
groceries | food bought at a supermarket | w
aisle | corridor between shelves | w
checkout | where you pay in a shop | w
self-checkout | machine where you pay yourself | w
loyalty card | card that gives points/discounts | ch
on offer / on sale | discounted (UK / CA-US) | ch
best before | date of best quality | ch
leftovers | food left after a meal | w
ingredients | items used to make a dish | w
chop | cut into pieces | w
peel | remove the skin | w
grate | rub against a grater (cheese) | w
stir | mix with a spoon | w
boil | heat water until it bubbles | w
fry | cook in oil | w
roast | cook in the oven (meat, vegetables) | w
bake | cook in the oven (bread, cakes) | w
simmer | cook just below boiling | w
season | add salt, pepper, spices | w
mouth-watering | looks delicious | w
bland | without flavour | w
greasy | full of oil | w
filling | makes you feel full | w
I'm starving | I'm very hungry | ch
I'm stuffed | I'm very full | ch
have a sweet tooth | love sweet food | id
to die for | extremely good | id
pig out | eat a lot | pv
eat out | eat at a restaurant | pv
grab a coffee | casual invitation | ch
split the bill | pay equally | ch
it's on me | I'll pay | ch
treat someone | pay for someone as a gift | ch
cutlery | knives, forks and spoons (UK) | w
napkin / serviette | paper to clean your mouth (CA-US / UK) | w
craving | strong desire for a food | w
portion | amount served | w
spicy | hot with chilli | w
sold out | none left | ch
Can we have the bill, please? | asking to pay (UK) | ch
Is service included? | asking if the tip is in the bill | ch
`,
  resources: [
    R.bbcGoodFood,
    R.taskmaster,
    R.sixMinute,
    R.youglish,
    R.reddit('Cooking', 'Perguntas e receitas reais de pessoas comuns.'),
    R.anki,
  ],
  contents: [
    {
      title: 'Gordon Ramsay (Kitchen Nightmares / receitas)',
      kind: 'youtube',
      detail: 'Inglês britânico rápido e muito vocabulário de cozinha.',
      url: ytSearch('gordon ramsay recipe'),
    },
    {
      title: 'Ordering at a British pub',
      kind: 'youtube',
      detail: 'Como funciona pedir no balcão do pub.',
      url: ytSearch('how to order at a british pub'),
    },
    {
      title: 'Canadian food tried by foreigners',
      kind: 'youtube',
      detail: 'Poutine, Timmies, Nanaimo bars.',
      url: ytSearch('trying canadian food poutine tim hortons'),
    },
    {
      title: 'BBC Good Food',
      kind: 'reading',
      detail: 'Escolha uma receita e leia o passo a passo.',
      url: R.bbcGoodFood.url,
    },
    {
      title: 'Dragon Ball (dub)',
      kind: 'series',
      detail: 'Cenas do Goku comendo: ótimas para rir e minerar.',
    },
  ],
  dailyChallenge:
    'Em toda refeição, descreva em voz baixa o que está comendo: sabor, textura, como foi feito.',
  plan: {
    shadowing: {
      clip: '60s de uma receita do Gordon Ramsay',
      resource: 'YouTube',
      url: ytSearch('gordon ramsay quick recipe'),
    },
    roleplayWork:
      'Almoço de equipe: você escolhe o restaurante, organiza o pedido do grupo e lida com alguém com alergia.',
    reading: { what: 'uma receita completa', resource: 'BBC Good Food', url: R.bbcGoodFood.url },
    writingPrompt:
      'uma review de 100 palavras de um restaurante (ou fast food) que você conhece, estilo Google Reviews.',
    interaction: {
      what: 'cenas de comida em anime (Dragon Ball, JoJo Parte 4: restaurante do Tonio)',
      resource: 'Anime (dub)',
    },
    roleplaySocial:
      'Pub em Londres: pedir no balcão, pagar uma rodada, conversar com um desconhecido sobre comida britânica.',
    chorusing: ['Could I get the..., please?', "It's my round", "I'm absolutely stuffed"],
    game: {
      title: 'Qualquer jogo com comida (Cyberpunk: barracas de rua)',
      prompt:
        'Cozinhe algo de verdade ou no jogo e narre a receita como num programa de culinária.',
    },
    monologue:
      'qual comida brasileira você levaria para apresentar aos colegas no Canadá ou UK, e como explicaria a receita.',
  },
}
