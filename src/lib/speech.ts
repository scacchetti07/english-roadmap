/** Leitura em voz alta com a Web Speech API, preferindo uma voz britânica. */
export function speak(text: string, lang: 'en-GB' | 'en-US' | 'en-CA' = 'en-GB') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false
  const synth = window.speechSynthesis
  synth.cancel()
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = lang
  utter.rate = 0.95
  const voice =
    synth.getVoices().find((v) => v.lang === lang) ??
    synth.getVoices().find((v) => v.lang.startsWith('en'))
  if (voice) utter.voice = voice
  synth.speak(utter)
  return true
}
