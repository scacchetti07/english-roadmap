type EnglishLang = 'en-GB' | 'en-US' | 'en-CA'

const norm = (lang: string) => lang.replace('_', '-').toLowerCase()

let voicesPromise: Promise<SpeechSynthesisVoice[]> | null = null

/**
 * Chrome/Edge carregam as vozes de forma assíncrona: `getVoices()` retorna []
 * nas primeiras chamadas. Sem voz explícita, o navegador cai na voz padrão do
 * sistema (pt-BR). Aqui esperamos o `voiceschanged` (com timeout) antes de falar.
 */
function loadVoices(synth: SpeechSynthesis): Promise<SpeechSynthesisVoice[]> {
  const now = synth.getVoices()
  if (now.length) return Promise.resolve(now)
  if (!voicesPromise) {
    voicesPromise = new Promise((resolve) => {
      const done = () => {
        synth.removeEventListener('voiceschanged', done)
        clearTimeout(timer)
        const list = synth.getVoices()
        if (!list.length) voicesPromise = null // tenta de novo na próxima chamada
        resolve(list)
      }
      const timer = setTimeout(done, 1500)
      synth.addEventListener('voiceschanged', done)
    })
  }
  return voicesPromise
}

function pickEnglishVoice(voices: SpeechSynthesisVoice[], lang: EnglishLang) {
  const target = norm(lang)
  const english = voices.filter((v) => norm(v.lang).startsWith('en'))
  return (
    english.find((v) => norm(v.lang) === target && v.localService) ??
    english.find((v) => norm(v.lang) === target) ??
    english.find((v) => norm(v.lang) === 'en-gb') ??
    english.find((v) => norm(v.lang) === 'en-us') ??
    english[0]
  )
}

/** Leitura em voz alta com a Web Speech API, preferindo uma voz britânica. */
export function speak(text: string, lang: EnglishLang = 'en-GB') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false
  const synth = window.speechSynthesis
  synth.cancel()

  void loadVoices(synth).then((voices) => {
    const utter = new SpeechSynthesisUtterance(text)
    const voice = pickEnglishVoice(voices, lang)
    if (voice) {
      utter.voice = voice
      utter.lang = voice.lang
    } else {
      utter.lang = lang
    }
    utter.rate = 0.95
    synth.cancel()
    synth.speak(utter)
  })
  return true
}

// Aquece a lista de vozes cedo, para o primeiro clique já ter voz em inglês.
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  void loadVoices(window.speechSynthesis)
}
