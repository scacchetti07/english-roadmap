import type { Resource } from './types'

const yt = (q: string): string =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`

/** Busca no YouTube: sempre funciona, mesmo que um vídeo específico saia do ar. */
export const ytSearch = yt

/** Catálogo de recursos reutilizados pelas semanas. */
export const R = {
  trashTaste: {
    name: 'Trash Taste',
    url: 'https://www.youtube.com/@TrashTaste',
    kind: 'podcast',
    note: 'Três amigos conversando sobre anime, games e vida no exterior. Banter e conversa real.',
  },
  lukesPodcast: {
    name: "Luke's English Podcast",
    url: 'https://teacherluke.co.uk',
    kind: 'podcast',
    note: 'Professor britânico, feito para alunos avançados. Muito natural.',
  },
  sixMinute: {
    name: 'BBC 6 Minute English',
    url: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english',
    kind: 'podcast',
    note: 'Episódios curtos com vocabulário atual e transcrição.',
  },
  taskmaster: {
    name: 'Taskmaster (canal oficial)',
    url: 'https://www.youtube.com/@Taskmaster',
    kind: 'series',
    note: 'Episódios completos no YouTube. Humor britânico e conversa espontânea.',
  },
  gigguk: {
    name: 'Gigguk',
    url: 'https://www.youtube.com/@gigguk',
    kind: 'youtube',
    note: 'Anime com humor rápido, sotaque britânico.',
  },
  eyepatchWolf: {
    name: 'Super Eyepatch Wolf',
    url: 'https://www.youtube.com/@SuperEyepatchWolf',
    kind: 'youtube',
    note: 'Ensaios longos sobre anime e cultura pop, britânico.',
  },
  gmtk: {
    name: "Game Maker's Toolkit",
    url: 'https://www.youtube.com/@GMTK',
    kind: 'youtube',
    note: 'Design de jogos, britânico, claro e didático. Ótimo para shadowing.',
  },
  noclip: {
    name: 'Noclip',
    url: yt('Noclip documentary'),
    kind: 'youtube',
    note: 'Documentários sobre desenvolvimento de jogos.',
  },
  jacobGeller: {
    name: 'Jacob Geller',
    url: 'https://www.youtube.com/@JacobGeller',
    kind: 'youtube',
    note: 'Video-ensaios com vocabulário avançado.',
  },
  fireship: {
    name: 'Fireship',
    url: 'https://www.youtube.com/@Fireship',
    kind: 'youtube',
    note: 'Tecnologia e programação, rápido e denso.',
  },
  mrwho: {
    name: 'Mrwhosetheboss',
    url: 'https://www.youtube.com/@Mrwhosetheboss',
    kind: 'youtube',
    note: 'Reviews de produtos, britânico.',
  },
  mkbhd: {
    name: 'MKBHD',
    url: 'https://www.youtube.com/@mkbhd',
    kind: 'youtube',
    note: 'Reviews de tecnologia, fala clara.',
  },
  primeagen: {
    name: 'ThePrimeagen',
    url: yt('ThePrimeagen'),
    kind: 'youtube',
    note: 'Programação e cultura dev, muita gíria.',
  },
  darknet: {
    name: 'Darknet Diaries',
    url: 'https://darknetdiaries.com',
    kind: 'podcast',
    note: 'Histórias reais de hackers. Combina com Watch Dogs.',
  },
  syntax: {
    name: 'Syntax',
    url: 'https://syntax.fm',
    kind: 'podcast',
    note: 'Podcast de desenvolvimento web.',
  },
  aliAbdaal: {
    name: 'Ali Abdaal',
    url: 'https://www.youtube.com/@aliabdaal',
    kind: 'youtube',
    note: 'Produtividade e motivação, britânico, fala clara.',
  },
  comicTropes: {
    name: 'Comic Tropes',
    url: yt('Comic Tropes'),
    kind: 'youtube',
    note: 'Análise de HQs.',
  },
  comicsExplained: {
    name: 'Comics Explained',
    url: yt('Comics Explained'),
    kind: 'youtube',
    note: 'Resumos e explicações de arcos de HQ.',
  },
  marvelUnlimited: {
    name: 'Marvel Unlimited',
    url: 'https://www.marvel.com/unlimited',
    kind: 'comic',
    note: 'HQs da Marvel no original.',
  },
  nhs: {
    name: 'NHS (site oficial)',
    url: 'https://www.nhs.uk',
    kind: 'reading',
    note: 'Inglês real de saúde no Reino Unido.',
  },
  govUkRenting: {
    name: 'GOV.UK: Private renting',
    url: 'https://www.gov.uk/private-renting',
    kind: 'reading',
    note: 'Direitos e deveres de inquilinos no UK.',
  },
  canadaNewcomers: {
    name: 'Canada.ca: Immigration',
    url: 'https://www.canada.ca/en/immigration-refugees-citizenship.html',
    kind: 'reading',
    note: 'Textos oficiais para quem vai morar no Canadá.',
  },
  jobBank: {
    name: 'Job Bank (Canadá)',
    url: 'https://www.jobbank.gc.ca',
    kind: 'site',
    note: 'Vagas reais e descrições de cargos no Canadá.',
  },
  bbcGoodFood: {
    name: 'BBC Good Food',
    url: 'https://www.bbcgoodfood.com',
    kind: 'reading',
    note: 'Receitas em inglês britânico.',
  },
  tfl: {
    name: 'TfL (Transport for London)',
    url: 'https://tfl.gov.uk',
    kind: 'site',
    note: 'Transporte de Londres: mapas, tarifas, avisos.',
  },
  ttc: {
    name: 'TTC (Toronto Transit)',
    url: 'https://www.ttc.ca',
    kind: 'site',
    note: 'Transporte de Toronto.',
  },
  youglish: {
    name: 'YouGlish',
    url: 'https://youglish.com',
    kind: 'tool',
    note: 'Ouça qualquer palavra em vídeos reais, filtre por sotaque UK.',
  },
  cambridge: {
    name: 'Cambridge Dictionary',
    url: 'https://dictionary.cambridge.org',
    kind: 'tool',
    note: 'Dicionário inglês-inglês com áudio UK e US.',
  },
  anki: {
    name: 'Anki',
    url: 'https://apps.ankiweb.net',
    kind: 'tool',
    note: 'Flashcards com repetição espaçada. Ative o FSRS.',
  },
  languageReactor: {
    name: 'Language Reactor',
    url: 'https://www.languagereactor.com',
    kind: 'tool',
    note: 'Legendas interativas e loop no YouTube/Netflix.',
  },
  efset: {
    name: 'EF SET',
    url: 'https://www.efset.org',
    kind: 'tool',
    note: 'Teste de nível gratuito (checkpoint trimestral).',
  },
  reddit: (sub: string, note: string): Resource => ({
    name: `r/${sub}`,
    url: `https://www.reddit.com/r/${sub}`,
    kind: 'reading',
    note,
  }),
} satisfies Record<string, Resource | ((...args: string[]) => Resource)>
