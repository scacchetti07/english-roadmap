export interface ExportableCard {
  front: string
  back: string
  example?: string
  tags: string[]
  deck: string
}

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Transforma texto livre num campo seguro para o Anki (sem tabs, quebras viram <br>). */
export function toAnkiField(text: string) {
  return escapeHtml(text.trim()).replace(/\t/g, ' ').replace(/\r?\n/g, '<br>')
}

const toTag = (tag: string) => tag.trim().replace(/\s+/g, '_')

/**
 * Gera um .txt que o Anki (2.1.55+) importa direto em File → Import,
 * já com separador, tipo de nota, baralho e coluna de tags configurados.
 * Colunas: Front | Back (+ exemplo em itálico) | Tags | Deck
 */
export function toAnkiTxt(cards: ExportableCard[], defaultDeck = 'English B2-C2') {
  const header = [
    '#separator:tab',
    '#html:true',
    '#notetype:Basic',
    `#deck:${defaultDeck}`,
    '#deck column:4',
    '#tags column:3',
  ]
  const rows = cards.map((card) => {
    const back = card.example?.trim()
      ? `${toAnkiField(card.back)}<br><br><i>${toAnkiField(card.example)}</i>`
      : toAnkiField(card.back)
    const deck = card.deck.trim() || defaultDeck
    return [
      toAnkiField(card.front),
      back,
      card.tags.map(toTag).join(' '),
      deck.replace(/\t/g, ' '),
    ].join('\t')
  })
  return [...header, ...rows].join('\n') + '\n'
}

const csvCell = (text: string) => `"${text.replace(/"/g, '""')}"`

/** CSV simples (Front, Back, Example, Tags, Deck) para planilhas ou outros apps. */
export function toCsv(cards: ExportableCard[]) {
  const head = ['Front', 'Back', 'Example', 'Tags', 'Deck'].map(csvCell).join(',')
  const rows = cards.map((c) =>
    [c.front, c.back, c.example ?? '', c.tags.join(' '), c.deck].map(csvCell).join(','),
  )
  return [head, ...rows].join('\r\n')
}

export function downloadText(filename: string, content: string, mime = 'text/plain') {
  const blob = new Blob([content], { type: `${mime};charset=utf-8` })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
