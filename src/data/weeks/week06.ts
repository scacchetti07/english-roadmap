import { R, ytSearch } from '../resources'
import type { WeekSource } from '../types'

export const week06: WeekSource = {
  number: 6,
  theme: 'Health & the doctor',
  subtitle: 'Sintomas, GP, farmácia e bem-estar',
  emoji: '🩺',
  interestHook:
    'O treino diário do Sung Jinwoo em Solo Leveling: vocabulário de corpo, treino e lesões.',
  goal: 'Descrever sintomas com precisão, marcar consulta e entender orientações médicas.',
  grammar: {
    topic: 'Present Perfect Simple vs Present Perfect Continuous',
    summary:
      'Ambos ligam passado e presente. O simple foca no resultado ou na quantidade ("I\'ve taken two painkillers"). O continuous foca na duração ou atividade em andamento ("I\'ve been feeling dizzy for three days"). Com for/since para duração, prefira o continuous com verbos de ação.',
    rules: [
      'Duração até agora → continuous: "I\'ve been coughing since Monday."',
      'Resultado ou quantidade → simple: "I\'ve lost 3 kilos."',
      'Verbos de estado ficam no simple: "I\'ve had this rash for a week."',
      'for + período (for two weeks); since + ponto no tempo (since Monday).',
      'Brasileiros costumam usar o presente: "I have this pain since..." está errado.',
    ],
    examples: [
      { en: "I've been feeling a bit under the weather for a couple of days." },
      { en: "I've had this sore throat since Saturday and it's getting worse." },
      { en: "I've already taken some paracetamol, but it hasn't helped." },
      { en: 'Have you been working out a lot lately? You look in great shape.' },
    ],
    mistakes: [
      {
        wrong: 'I have this headache since yesterday.',
        right: "I've had this headache since yesterday.",
      },
      { wrong: 'I am sick since Monday.', right: "I've been ill since Monday." },
      { wrong: 'I took the remedy.', right: 'I took the medicine / medication.' },
      { wrong: 'I want to make an exam.', right: "I'd like to have a test / a check-up." },
    ],
    practice:
      'Descreva uma doença ou lesão que você já teve como se estivesse no médico: desde quando, o que já tomou, como tem se sentido.',
  },
  vocabRaw: `
GP | general practitioner, family doctor (UK) | w
family doctor | your regular doctor (CA) | ch
walk-in clinic | clinic where you don't need an appointment (CA) | ch
A&E | emergency department (UK) | w
the ER | emergency room (CA/US) | w
NHS | the UK's public health service | w
health card | provincial health insurance card (CA) | ch
register with a GP | sign up with a local doctor (UK) | ch
book an appointment | schedule a visit | ch
prescription | doctor's written order for medicine | w
pharmacy / chemist's | where you buy medicine (CA-US / UK) | w
over-the-counter | sold without a prescription | ch
painkiller | medicine for pain | w
symptoms | signs of an illness | w
I've been feeling | describing how you've felt recently | ch
under the weather | slightly ill | id
come down with | start to get an illness | pv
catch a cold | get a cold | ch
the flu | influenza | ch
sore throat | painful throat | ch
runny nose | nose with liquid coming out | ch
blocked nose | congested nose (UK); "stuffy nose" (CA-US) | ch
cough | push air out of your throat noisily | w
sneeze | sudden air out of your nose | w
temperature / fever | high body temperature (UK / CA-US) | w
headache | pain in the head | w
dizzy | feeling that everything is spinning | w
feel sick / nauseous | feel like vomiting (UK / CA-US) | ch
throw up | vomit (informal) | pv
rash | red spots on the skin | w
itchy | makes you want to scratch | w
swollen | bigger than normal (injury) | w
sprain | injure a joint by twisting | w
twist your ankle | injure your ankle | ch
pull a muscle | injure a muscle | ch
bruise | dark mark on the skin after a hit | w
sharp pain | sudden, intense pain | ch
dull ache | constant, mild pain | ch
on and off | not continuously | ch
get worse | deteriorate | ch
get better | improve | ch
recover | become healthy again | w
get over | recover from | pv
take time off | not go to work | ch
sick note | doctor's note for work (UK) | ch
call in sick | phone work to say you're ill | ch
side effects | unwanted effects of medicine | ch
allergic reaction | body's reaction to an allergen | ch
check-up | routine medical exam | w
blood test | analysis of your blood | ch
filling | material put in a tooth | w
mental health | psychological wellbeing | ch
burnout | exhaustion from too much work | w
stressed out | very stressed | ch
anxious | worried and nervous | w
work out | exercise | pv
get in shape | become fit | ch
warm up | prepare the body before exercise | pv
stretch | extend your muscles | w
sore muscles | muscles that hurt after exercise | ch
injury | physical damage to the body | w
stay hydrated | drink enough water | ch
cut down on | reduce | pv
give up | stop doing (a habit) | pv
pass out | faint, lose consciousness | pv
pick up a bug | catch a minor illness | ch
feeling a bit off | not quite well | ch
How long have you had these symptoms? | doctor's question | ch
fit as a fiddle | very healthy | id
on the mend | recovering | id
take your medication | take your medicine | ch
twice a day | two times daily | ch
on an empty stomach | without eating before | ch
I've been signed off work | the doctor said I can't work (UK) | ch
`,
  resources: [R.nhs, R.canadaNewcomers, R.sixMinute, R.aliAbdaal, R.youglish, R.anki],
  contents: [
    {
      title: 'NHS: Health A to Z',
      kind: 'reading',
      detail: 'Leia a página de uma doença comum (flu, cold, back pain).',
      url: 'https://www.nhs.uk/conditions/',
    },
    {
      title: 'At the doctor (diálogos reais)',
      kind: 'youtube',
      detail: 'Consultas simuladas para shadowing.',
      url: ytSearch('at the doctor english conversation british'),
    },
    {
      title: 'Solo Leveling (dub)',
      kind: 'series',
      detail: 'Treinos, lesões, recuperação: vocabulário do corpo.',
    },
    {
      title: 'Ali Abdaal',
      kind: 'youtube',
      detail: 'Vídeos sobre burnout, sono e energia.',
      url: R.aliAbdaal.url,
    },
    {
      title: 'How healthcare works in Canada',
      kind: 'youtube',
      detail: 'Health card, walk-in clinic, family doctor.',
      url: ytSearch('how healthcare works in canada newcomers'),
    },
  ],
  dailyChallenge:
    'Toda noite, responda em voz alta: "How have you been feeling today?" usando o present perfect.',
  plan: {
    shadowing: {
      clip: '60s de uma consulta simulada',
      resource: 'YouTube',
      url: ytSearch('at the doctor english conversation british'),
    },
    roleplayWork:
      'Ligue para seu manager avisando que está doente (call in sick), explique os sintomas e combine como fica o trabalho.',
    reading: {
      what: 'a página de "Common cold" ou "Back pain"',
      resource: 'NHS',
      url: 'https://www.nhs.uk/conditions/',
    },
    writingPrompt: 'um e-mail curto para o trabalho avisando que vai tirar o dia por doença.',
    interaction: {
      what: 'cenas de treino e lesão em Solo Leveling',
      resource: 'Solo Leveling (dub)',
    },
    roleplaySocial:
      'Consulta com um GP em Londres: descreva sintomas, responda perguntas e entenda a prescrição.',
    chorusing: [
      "I've been feeling a bit under the weather",
      "It's been getting worse",
      "I think I'm coming down with something",
    ],
    game: {
      title: 'Qualquer jogo de ação (Cyberpunk, Watch Dogs)',
      prompt:
        'Toda vez que o personagem tomar dano, descreva a lesão como se estivesse num pronto-socorro.',
    },
    monologue: 'seus hábitos de saúde: sono, exercício, alimentação, o que você quer mudar.',
  },
}
