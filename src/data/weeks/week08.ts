import { R, ytSearch } from '../resources'
import type { WeekSource } from '../types'

export const week08: WeekSource = {
  number: 8,
  theme: 'Landing the job',
  subtitle: 'CV, cover letter e entrevistas',
  emoji: '💼',
  interestHook:
    'Solo Leveling: subir de Rank E para Rank S. A sua carreira no exterior segue a mesma lógica.',
  goal: 'Responder às 10 perguntas de entrevista mais comuns com o método STAR, com naturalidade.',
  grammar: {
    topic: 'Past Simple vs Present Perfect para falar de experiência',
    summary:
      'Present perfect para experiência de vida sem data ("I\'ve led two projects") e para algo que continua ("I\'ve worked here since 2022"). Past simple quando há tempo definido ou o período já acabou ("At my last job, I led a team of five"). Nas respostas STAR, a história em si fica no past simple.',
    rules: [
      'Experiência geral: "I\'ve worked with React for four years."',
      'Ação concluída com tempo definido: "In 2023, I migrated our app to TypeScript."',
      'Empregos anteriores (já terminados) → past simple.',
      'STAR: Situation (past continuous/simple), Task, Action (past simple), Result (past simple + números).',
      'Palavras-sinal: ever, never, so far, since, for → perfect; ago, last year, in 2021 → past.',
    ],
    examples: [
      { en: "I've been working as a developer for five years, mostly in fintech." },
      { en: 'In my last role, I was responsible for the onboarding flow.' },
      {
        en: 'We were losing users at checkout, so I took the initiative to redesign it. As a result, conversions went up by 20%.',
      },
      { en: "I've never worked abroad, but I've collaborated with international teams remotely." },
    ],
    mistakes: [
      { wrong: 'I work here since 2020.', right: "I've worked here since 2020." },
      { wrong: "I've worked at Google in 2021.", right: 'I worked at Google in 2021.' },
      {
        wrong: 'I have experience in work with clients.',
        right: 'I have experience working with clients.',
      },
      { wrong: 'I am very proactive person.', right: "I'm a very proactive person." },
    ],
    practice:
      'Escreva duas respostas STAR: "Tell me about a challenge you faced" e "Tell me about a time you disagreed with someone".',
  },
  vocabRaw: `
job hunting | looking for a job | ch
job posting | a job advert online | ch
apply for | formally ask for a job | pv
application | formal request for a job | w
CV / résumé | document with your experience (UK / CA) | w
cover letter | letter explaining why you fit the job | ch
recruiter | person who finds candidates | w
headhunter | recruiter who approaches people directly | w
hiring manager | the person you'd work for | ch
shortlist | final list of candidates | w
screening call | short first call with a recruiter | ch
panel interview | interview with several people | ch
behavioural question | "tell me about a time when..." | ch
STAR method | Situation, Task, Action, Result | ch
strengths and weaknesses | what you're good / not good at | ch
track record | history of achievements | ch
hands-on experience | practical experience | ch
background in | experience/education in a field | ch
skill set | your combination of skills | ch
soft skills | communication, teamwork etc. | ch
transferable skills | skills useful in different jobs | ch
proficient in | very good at (a tool/language) | ch
qualified / overqualified | has (too much) experience for the role | w
entry-level | for beginners | w
junior / mid-level / senior | experience levels | w
full-time / part-time | working hours | w
permanent / contract | job types | w
remote / hybrid / on-site | where you work | w
salary expectations | how much you want to earn | ch
negotiate | discuss to reach an agreement | w
benefits package | health insurance, pension etc. | ch
perks | extra advantages | w
start date | first day of work | ch
reference check | employer contacts your references | ch
job offer | formal offer of a job | ch
turn down an offer | reject an offer | ch
work permit | permission to work in a country | ch
visa sponsorship | employer supports your visa | ch
Canadian experience | local work experience (often requested in CA) | ch
networking | building professional contacts | w
reach out to | contact | pv
follow up | contact again after something | pv
get back to you | reply later | ch
land a job | get a job | ch
get hired | be given a job | ch
be laid off | lose your job due to company cuts | ch
let go | fired (polite) | ch
career change | moving to a different career | ch
gap in my CV | period without work | ch
I'm passionate about | I really care about | ch
I thrive in | I do very well in (an environment) | ch
I took the initiative to | I decided by myself to | ch
I was responsible for | my job was to | ch
as a result | consequently | ch
I'm a quick learner | I learn fast | ch
team player | someone who works well with others | ch
meet deadlines | finish work on time | ch
under pressure | in stressful conditions | ch
go the extra mile | do more than expected | id
step out of my comfort zone | do something challenging | id
Where do you see yourself in five years? | classic interview question | ch
Do you have any questions for us? | end-of-interview question | ch
That's a great question | buys time to think politely | ch
let me think about that for a second | asking for time to think | ch
cross-functional | involving different teams | w
stakeholder management | dealing with people affected by a project | ch
drive results | make things happen | ch
spearhead | lead an initiative | w
streamline | make more efficient | w
upskill | learn new skills for work | w
career progression | moving up in your career | ch
key achievements | most important accomplishments | ch
fit for the role | suitable for the job | ch
I'm open to relocation | I'm willing to move | ch
walk me through | explain step by step | pv
`,
  resources: [
    R.jobBank,
    R.reddit('cscareerquestions', 'Carreiras em tecnologia: entrevistas, salários, dúvidas.'),
    R.aliAbdaal,
    R.youglish,
    R.cambridge,
    R.anki,
  ],
  contents: [
    {
      title: 'Mock job interviews (STAR)',
      kind: 'youtube',
      detail: 'Assista a entrevistas simuladas e copie estruturas.',
      url: ytSearch('STAR method interview answers examples'),
    },
    {
      title: 'Canadian résumé format',
      kind: 'youtube',
      detail: 'Diferenças entre CV brasileiro e résumé canadense.',
      url: ytSearch('canadian resume format newcomers'),
    },
    {
      title: 'Job Bank',
      kind: 'site',
      detail: 'Leia 5 descrições de vagas da sua área e grife o vocabulário.',
      url: R.jobBank.url,
    },
    {
      title: 'Solo Leveling (dub)',
      kind: 'series',
      detail: 'Arcos de "subir de rank" para o modo streamer.',
    },
    {
      title: 'Behavioural interview tips (UK)',
      kind: 'youtube',
      detail: 'Entrevistas no estilo britânico.',
      url: ytSearch('competency based interview UK tips'),
    },
  ],
  dailyChallenge:
    'Responda 1 pergunta de entrevista por dia em voz alta, gravando: "Tell me about yourself", "Why do you want to work here?", "What\'s your biggest weakness?"...',
  plan: {
    shadowing: {
      clip: 'uma resposta modelo de "Tell me about yourself" (60–90s)',
      resource: 'YouTube',
      url: ytSearch('tell me about yourself best answer interview'),
    },
    roleplayWork:
      'Entrevista comportamental com um hiring manager em Londres para uma vaga da sua área (peça 5 perguntas STAR).',
    reading: { what: '5 descrições de vaga da sua área', resource: 'Job Bank', url: R.jobBank.url },
    writingPrompt: 'a primeira versão da sua cover letter (até 200 palavras) para uma vaga real.',
    interaction: {
      what: 'vídeos de entrevista simulada: responda você antes do candidato',
      resource: 'YouTube (mock interviews)',
    },
    roleplaySocial:
      'Evento de networking: apresente-se, puxe conversa com um desenvolvedor sênior e peça uma indicação.',
    chorusing: [
      'I was responsible for...',
      'As a result, ...',
      "That's a great question, let me think",
    ],
    game: {
      title: 'Solo Leveling: Arise (ou qualquer RPG)',
      prompt:
        'Narre sua evolução de rank como se fosse uma entrevista: "When I started, I was an E-rank..."',
    },
    monologue: 'sua resposta definitiva para "Why do you want to work in Canada/the UK?"',
  },
}
