/** Confete carregado sob demanda (fica fora do bundle principal). */
export async function celebrate(big = false) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const { default: confetti } = await import('canvas-confetti')
  const colors = ['#22d3ee', '#a855f7', '#facc15', '#4ade80']
  if (!big) {
    void confetti({ particleCount: 60, spread: 70, origin: { y: 0.75 }, colors, scalar: 0.9 })
    return
  }
  const end = Date.now() + 900
  const frame = () => {
    void confetti({ particleCount: 6, angle: 60, spread: 60, origin: { x: 0 }, colors })
    void confetti({ particleCount: 6, angle: 120, spread: 60, origin: { x: 1 }, colors })
    if (Date.now() < end) requestAnimationFrame(frame)
  }
  frame()
}
