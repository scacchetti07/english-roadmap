import type { Day, Task, VocabItem, WeekSource } from './types'

export const LINKS = {
  anki: 'https://apps.ankiweb.net',
  languageReactor: 'https://www.languagereactor.com',
  youglish: 'https://youglish.com',
  cambridge: 'https://dictionary.cambridge.org',
  chatgpt: 'https://chatgpt.com',
  claude: 'https://claude.ai',
  reddit: 'https://www.reddit.com',
}

export const WEEKDAYS = [
  { long: 'Segunda', short: 'Seg' },
  { long: 'Terça', short: 'Ter' },
  { long: 'Quarta', short: 'Qua' },
  { long: 'Quinta', short: 'Qui' },
  { long: 'Sexta', short: 'Sex' },
  { long: 'Sábado', short: 'Sáb' },
  { long: 'Domingo', short: 'Dom' },
] as const

const ROLEPLAY_PROMPT =
  "Abra o modo de voz da IA e cole: \"Let's do a speaking roleplay. [cenário]. Speak naturally at normal speed, keep your turns short so I talk more. When I say 'feedback', give me my 5 most important mistakes, 5 more natural ways to say things I said, and 3 words I was missing.\""

function anki(weekNumber: number, dayIndex: number, vocab: VocabItem[]): Task {
  const isSunday = dayIndex === 6
  return {
    id: `w${weekNumber}-d${dayIndex + 1}-anki`,
    label: isSunday
      ? 'Anki: só revisões'
      : `Anki: revisões + ${vocab.length} cards novos da semana`,
    resource: 'Anki (FSRS ativado)',
    url: LINKS.anki,
    minutes: 10,
    how: isSunday
      ? 'Faça só as revisões pendentes, lendo cada frase em voz alta. Domingo não entra card novo.'
      : 'Primeiro as revisões, depois os cards novos de hoje (lista abaixo). Leia tudo em voz alta. Use o botão "+ Flashcard" para mandar o vocabulário do dia para o seu baralho e exporte para o Anki.',
    kind: 'vocab',
  }
}

/** Monta os 7 dias de uma semana a partir do molde fixo + o plano específico da semana. */
export function buildDays(week: WeekSource, vocab: VocabItem[]): Day[] {
  const { plan, number: n } = week
  const perDay = Math.ceil(vocab.length / 6)
  const slice = (i: number) => (i === 6 ? [] : vocab.slice(i * perDay, (i + 1) * perDay))
  const t = (d: number, key: string, task: Omit<Task, 'id'>): Task => ({
    id: `w${n}-d${d + 1}-${key}`,
    ...task,
  })
  const passive = (i: number) => {
    const c = week.contents[i % week.contents.length]
    return c ? `${c.title}: ${c.detail}` : 'Podcast ou YouTube do barril durante os tempos mortos.'
  }

  const blueprint: Array<{ title: string; focus: string; tasks: (i: number) => Task[] }> = [
    {
      title: 'Shadowing',
      focus: 'Pronúncia, ritmo e entonação',
      tasks: (i) => [
        t(i, 'shadow', {
          label: 'Shadowing',
          resource: `${plan.shadowing.resource}: ${plan.shadowing.clip}`,
          url: plan.shadowing.url,
          minutes: 15,
          how: 'Ouça 2x prestando atenção. Leia a transcrição. Repita junto com a transcrição 2–3x, depois sem ela 2–3x. Grave a última tentativa e compare com o original (ritmo e ligações entre palavras, não sons isolados).',
          kind: 'speaking',
        }),
        t(i, 'mine', {
          label: 'Sentence mining do clipe',
          resource: 'Language Reactor / transcrição',
          url: LINKS.languageReactor,
          minutes: 5,
          how: 'Escolha 3–5 frases do clipe com só UMA coisa nova (palavra, expressão ou uso). Crie flashcards na aba Flashcards.',
          kind: 'vocab',
        }),
      ],
    },
    {
      title: 'Roleplay: Trabalho',
      focus: 'Conversa em tempo real, situação profissional',
      tasks: (i) => [
        t(i, 'roleplay', {
          label: 'Roleplay de voz com IA',
          resource: 'ChatGPT / Claude / Gemini (modo de voz)',
          url: LINKS.chatgpt,
          minutes: 15,
          how: `${ROLEPLAY_PROMPT}\n\nCenário de hoje: ${plan.roleplayWork}`,
          kind: 'speaking',
        }),
        t(i, 'gaps', {
          label: 'Registrar lacunas do feedback',
          resource: 'Nota LACUNAS no celular',
          minutes: 5,
          how: 'Anote tudo o que você não soube dizer e as 5 correções principais. As melhores viram flashcard no domingo.',
          kind: 'review',
        }),
      ],
    },
    {
      title: 'Ler & Escrever',
      focus: 'Leitura ativa + escrita com correção de IA',
      tasks: (i) => [
        t(i, 'read', {
          label: 'Leitura ativa',
          resource: `${plan.reading.resource}: ${plan.reading.what}`,
          url: plan.reading.url,
          minutes: 10,
          how: 'Leia com atenção e marque 3–5 chunks interessantes (expressões, colocações). Não traduza tudo: só o que impede o entendimento.',
          kind: 'reading',
        }),
        t(i, 'write', {
          label: 'Escrita + correção',
          resource: 'IA (cole o prompt de correção)',
          url: LINKS.claude,
          minutes: 5,
          how: `Escreva 80–150 palavras: ${plan.writingPrompt}\n\nPrompt: "I'm a B2 learner aiming for C1. Correct my text: 1) corrected version, 2) each mistake with a short explanation, 3) a natural C1 native rewrite, 4) 5 useful chunks from your version."`,
          kind: 'writing',
        }),
        t(i, 'chunks', {
          label: 'Chunks da correção → flashcards',
          resource: 'Aba Flashcards',
          minutes: 5,
          how: 'Transforme os 5 chunks sugeridos pela IA em flashcards (frente: frase com o chunk; verso: significado + uma frase sua).',
          kind: 'vocab',
        }),
      ],
    },
    {
      title: 'Interagir com conteúdo',
      focus: 'Fala espontânea a partir do que você já viu',
      tasks: (i) => [
        t(i, 'interact', {
          label: 'Pausar, responder e opinar',
          resource: `${plan.interaction.resource}: ${plan.interaction.what}`,
          minutes: 15,
          how: 'Pause depois das falas e responda ao personagem/criador em voz alta. Dê sua opinião por 30–60s, faça perguntas, preveja o que vem. Travou? Anote em LACUNAS.',
          kind: 'speaking',
        }),
        t(i, 'research', {
          label: 'Pesquisar 2–3 lacunas',
          resource: 'YouGlish + dicionário Cambridge',
          url: LINKS.youglish,
          minutes: 5,
          how: 'Para cada lacuna: descubra como um nativo diria, ouça no YouGlish e diga 3 frases sobre a sua vida usando a expressão.',
          kind: 'review',
        }),
      ],
    },
    {
      title: 'Roleplay: Social + Chorusing',
      focus: 'Small talk, vida prática e melodia da fala',
      tasks: (i) => [
        t(i, 'roleplay', {
          label: 'Roleplay de voz com IA',
          resource: 'ChatGPT / Claude / Gemini (modo de voz)',
          url: LINKS.chatgpt,
          minutes: 15,
          how: `${ROLEPLAY_PROMPT}\n\nCenário de hoje: ${plan.roleplaySocial}`,
          kind: 'speaking',
        }),
        t(i, 'chorus', {
          label: 'Chorusing dos chunks da semana',
          resource: 'YouGlish (loop) ou Language Reactor',
          url: LINKS.youglish,
          minutes: 5,
          how: `Busque cada chunk no YouGlish, coloque em loop e fale JUNTO 10–20x copiando a melodia: ${plan.chorusing.map((c) => `"${c}"`).join(' · ')}`,
          kind: 'speaking',
        }),
      ],
    },
    {
      title: 'Modo Streamer',
      focus: 'Fala contínua e divertida',
      tasks: (i) => [
        t(i, 'stream', {
          label: 'Jogar narrando em inglês (gravando)',
          resource: plan.game.title,
          minutes: 15,
          how: `Grave áudio/tela e narre como se tivesse audiência. Missão: ${plan.game.prompt}`,
          kind: 'speaking',
        }),
        t(i, 'listen', {
          label: 'Ouvir 2 min da gravação',
          resource: 'Sua gravação',
          minutes: 5,
          how: 'Ouça um trecho e anote em LACUNAS onde travou, repetiu "like/you know" demais ou usou português.',
          kind: 'review',
        }),
      ],
    },
    {
      title: 'Revisão & Barril',
      focus: 'Fechar a semana e preparar a próxima',
      tasks: (i) => [
        t(i, 'review', {
          label: 'Resolver a lista LACUNAS',
          resource: 'Nota LACUNAS + aba Flashcards',
          minutes: 10,
          how: 'Pesquise o que ficou pendente na semana e crie flashcards das 5–10 lacunas mais úteis.',
          kind: 'review',
        }),
        t(i, 'barrel', {
          label: 'Reabastecer barril + monólogo',
          resource: 'Playlists do barril + gravador do celular',
          minutes: 10,
          how: `Coloque ao menos 10 itens novos nas pastas da próxima semana. Depois grave um monólogo de 2 min: ${plan.monologue}`,
          kind: 'speaking',
        }),
      ],
    },
  ]

  return blueprint.map((b, i) => {
    const dayVocab = slice(i)
    return {
      id: `w${n}-d${i + 1}`,
      weekNumber: n,
      index: i,
      weekday: WEEKDAYS[i].long,
      weekdayShort: WEEKDAYS[i].short,
      title: b.title,
      focus: b.focus,
      tasks: [anki(n, i, dayVocab), ...b.tasks(i)],
      passive: passive(i),
      vocab: dayVocab,
    }
  })
}

export function totalMinutes(day: Day) {
  return day.tasks.reduce((sum, task) => sum + task.minutes, 0)
}
