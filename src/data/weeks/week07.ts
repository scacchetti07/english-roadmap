import { R, ytSearch } from '../resources'
import type { WeekSource } from '../types'

export const week07: WeekSource = {
  number: 7,
  theme: 'Money talks',
  subtitle: 'Banco, salário, impostos e compras',
  emoji: '💳',
  interestHook:
    'Eddies em Cyberpunk e golpes bancários em Watch Dogs: hora de falar de dinheiro de verdade.',
  goal: 'Abrir conta, entender holerite e impostos, fazer devoluções e falar de orçamento.',
  grammar: {
    topic: 'First e Second Conditionals',
    summary:
      'First conditional = situação real/provável no futuro: If + present, will + verbo ("If I get the job, I\'ll open a bank account"). Second conditional = hipotético ou improvável no presente/futuro: If + past, would + verbo ("If I had more money, I\'d move to London"). No second, use "were" para todas as pessoas em contexto formal.',
    rules: [
      'Real/possível: "If you pay by card, you\'ll get points."',
      'Hipotético: "If I won the lottery, I\'d buy a gaming rig."',
      '"If I were you, I\'d..." para dar conselhos.',
      '"Unless" = if not: "You won\'t build credit unless you use your card."',
      'Nunca use "will" na parte do "if": "If I will have money" está errado.',
    ],
    examples: [
      { en: "If you cancel before the end of the month, you won't be charged." },
      { en: "If I earned in pounds, I'd save up for a new GPU straight away." },
      { en: "If I were you, I'd open a chequing account first to build credit." },
      { en: "I'll get a refund as long as I keep the receipt." },
    ],
    mistakes: [
      { wrong: 'If I will get the job, I will move.', right: "If I get the job, I'll move." },
      { wrong: 'If I would have money, I would travel.', right: 'If I had money, I would travel.' },
      {
        wrong: 'I want to take money from the ATM.',
        right: 'I want to withdraw money / take some money out.',
      },
      { wrong: 'This is very expensive, is a robbery!', right: "That's a rip-off!" },
    ],
    practice:
      'Escreva 4 frases sobre sua mudança com first conditional (planos reais) e 4 com second conditional (sonhos e hipóteses).',
  },
  vocabRaw: `
open a bank account | start an account at a bank | ch
current account / chequing account | everyday bank account (UK / CA) | ch
savings account | account for saving money | ch
debit card / credit card | payment cards | ch
contactless / tap | pay by tapping (UK / CA) | w
cash | physical money | w
change | coins/notes returned to you | w
withdraw | take money out of an account | w
deposit | put money into an account | w
transfer | send money to another account | w
balance | amount of money in an account | w
overdraft | negative balance allowed by the bank | w
interest rate | percentage charged or paid | ch
credit score | rating of your credit history | ch
build credit | create a good credit history | ch
statement | monthly record of transactions | w
direct debit | automatic payment from your account (UK) | ch
pre-authorized payment | automatic payment (CA) | ch
bills | money owed for services | w
pay off | finish paying a debt | pv
owe | need to pay back | w
debt | money you owe | w
loan | money borrowed | w
mortgage | loan to buy a house | w
salary | fixed yearly pay | w
wage | pay per hour | w
payday | day you get paid | w
paycheque | payment from your employer (CA) | w
payslip / pay stub | document showing your pay (UK / CA) | w
take-home pay | pay after taxes | ch
gross / net | before / after deductions | w
income tax | tax on what you earn | ch
National Insurance number | UK tax and benefits ID | ch
SIN | Social Insurance Number (CA) | w
VAT / HST | sales taxes (UK / Ontario) | w
budget | plan for spending | w
save up for | save money to buy something | pv
splash out on | spend a lot on something nice (UK) | pv
cut back on | spend less on | pv
make ends meet | have just enough money for basics | id
broke | having no money | sl
skint | broke (UK) | sl
loaded | very rich | sl
cost an arm and a leg | be very expensive | id
bargain | something cheap and good | w
discount | reduced price | w
receipt | proof of purchase | w
refund | money returned | w
exchange | swap an item for another | w
faulty | not working properly | w
warranty / guarantee | promise to repair or replace | w
out of stock | not available now | ch
try on | test clothes before buying | pv
changing room / fitting room | where you try clothes (UK / CA-US) | ch
Boxing Day sales | big sales on 26 Dec (UK, CA) | ch
window shopping | looking without buying | ch
impulse buy | unplanned purchase | ch
subscription | regular payment for a service | w
cancel a subscription | stop a subscription | ch
scam | trick to steal money | w
fraud | crime of deceiving for money | w
phishing | fake emails to steal data | w
I'd like to return this | asking for a refund/exchange | ch
Do you take card? | asking if card is accepted | ch
keep the change | you don't need to give me change | ch
pay in instalments | pay in parts | ch
quid | pound sterling (UK slang) | sl
loonie / toonie | $1 / $2 Canadian coins | sl
budget-friendly | cheap, affordable | w
in the red / in the black | in debt / in profit | id
`,
  resources: [
    R.canadaNewcomers,
    R.sixMinute,
    R.darknet,
    R.reddit('PersonalFinanceCanada', 'Dúvidas reais sobre banco, crédito e impostos no Canadá.'),
    R.reddit('UKPersonalFinance', 'O mesmo para o Reino Unido.'),
    R.anki,
  ],
  contents: [
    {
      title: 'Opening a bank account in Canada as a newcomer',
      kind: 'youtube',
      detail: 'Explicações com o vocabulário exato.',
      url: ytSearch('opening a bank account in canada newcomer'),
    },
    {
      title: 'UK payslip explained',
      kind: 'youtube',
      detail: 'Tax code, National Insurance, take-home pay.',
      url: ytSearch('uk payslip explained'),
    },
    {
      title: 'Darknet Diaries',
      kind: 'podcast',
      detail: 'Escolha um episódio sobre fraude bancária ou golpes.',
      url: R.darknet.url,
    },
    {
      title: 'Watch Dogs 2',
      kind: 'game',
      detail: 'Missões sobre bancos, hackers e dinheiro digital.',
    },
    {
      title: 'r/PersonalFinanceCanada',
      kind: 'reading',
      detail: 'Leia 3 posts por semana.',
      url: 'https://www.reddit.com/r/PersonalFinanceCanada',
    },
  ],
  dailyChallenge:
    'Sempre que gastar dinheiro hoje, diga em inglês o que comprou, quanto custou e se foi "a bargain" ou "a rip-off".',
  plan: {
    shadowing: {
      clip: '60s de um vídeo sobre abrir conta no Canadá',
      resource: 'YouTube',
      url: ytSearch('opening a bank account in canada newcomer'),
    },
    roleplayWork:
      'Reunião com o RH sobre seu primeiro holerite: perguntar sobre take-home pay, impostos e benefícios.',
    reading: {
      what: '3 posts de dúvidas de recém-chegados',
      resource: 'r/PersonalFinanceCanada',
      url: 'https://www.reddit.com/r/PersonalFinanceCanada',
    },
    writingPrompt: 'um e-mail educado mas firme pedindo reembolso de um produto com defeito.',
    interaction: {
      what: 'cenas sobre dinheiro, dívidas e golpes',
      resource: 'Cyberpunk: Edgerunners / Watch Dogs',
    },
    roleplaySocial:
      'Abrir conta num banco em Toronto: documentos, tipos de conta, cartão de crédito para construir crédito.',
    chorusing: [
      "I'd like to return this, please",
      "If I were you, I'd...",
      'It cost an arm and a leg',
    ],
    game: {
      title: 'Cyberpunk 2077',
      prompt:
        'Toda compra ou venda no jogo: narre se vale a pena, compare preços, use conditionals.',
    },
    monologue: 'como você vai se organizar financeiramente nos primeiros 6 meses no exterior.',
  },
}
