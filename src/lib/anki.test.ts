import { describe, expect, it } from 'vitest'
import { toAnkiField, toAnkiTxt, toCsv } from './anki'

describe('anki export', () => {
  it('escapes html, tabs and newlines', () => {
    expect(toAnkiField('a < b\tc\nd')).toBe('a &lt; b c<br>d')
  })

  it('writes Anki headers and one tab-separated row per card', () => {
    const txt = toAnkiTxt([
      {
        front: 'break the ice',
        back: 'start a conversation',
        example: 'Small talk breaks the ice.',
        tags: ['week 1', 'chunk'],
        deck: 'English::W1',
      },
    ])
    const lines = txt.trim().split('\n')
    expect(lines[0]).toBe('#separator:tab')
    expect(lines).toContain('#tags column:3')
    const row = lines.at(-1)!.split('\t')
    expect(row).toHaveLength(4)
    expect(row[0]).toBe('break the ice')
    expect(row[1]).toContain('<i>Small talk breaks the ice.</i>')
    expect(row[2]).toBe('week_1 chunk')
    expect(row[3]).toBe('English::W1')
  })

  it('quotes csv cells', () => {
    expect(toCsv([{ front: 'say "hi"', back: 'x', tags: [], deck: 'd' }])).toContain('"say ""hi"""')
  })
})
