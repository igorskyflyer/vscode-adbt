import * as vscode from 'vscode'
import { HoverInfoEntry } from './HoverInfoEntry'

export function findToken(
  word: string,
  textBeforeCursor: string
): vscode.Hover {
  let found: boolean = false
  let hover: string = 'No information available.'

  word = word.trim().toLowerCase()
  textBeforeCursor = textBeforeCursor.toLowerCase()

  for (let i = 0; i < HoverInfoText.length; i++) {
    if (found) {
      break
    }

    const entry: HoverInfoEntry = HoverInfoText[i]
    found = false

    if (entry.token === '@' && textBeforeCursor.startsWith(entry.token)) {
      hover = entry.info
      found = true
      break
    }

    if (entry.token === '#' && textBeforeCursor.startsWith(entry.token)) {
      hover = entry.info
      found = true
      break
    }

    if (entry.token === word) {
      hover = entry.info
      found = true
      break
    }

    if (entry.subtokens instanceof Array && entry.subtokens.length > 0) {
      const count: number = entry.subtokens.length

      for (let j = 0; j < count; j++) {
        if (entry.subtokens[j].token === word) {
          hover = entry.subtokens[j].info
          found = true
          break
        }
      }
    }
  }

  return new vscode.Hover(hover)
}

const HoverInfoText: HoverInfoEntry[] = [
  new HoverInfoEntry('include', 'Includes a filter file.'),
  new HoverInfoEntry('header', 'Includes a header file.'),
  new HoverInfoEntry('export', 'Exports all rules to the provided filepath.'),
  new HoverInfoEntry('nl', 'Inserts a blank newline (LF).'),
  new HoverInfoEntry('@', 'Inserts an internal comment.'),
  new HoverInfoEntry('#', 'Inserts an exported comment.'),
  new HoverInfoEntry(
    'import',
    'Includes a filter file and prepends its file path as a comment.'
  ),
  new HoverInfoEntry(
    'tag',
    'Includes a tag, special, auto-enumerated comment with an optional description.'
  ),
  new HoverInfoEntry(
    'meta',
    "Inlines metadata to use in the template's header.",
    [
      new HoverInfoEntry('title', 'Inlines title metadata to use.'),
      new HoverInfoEntry('expires', 'Inlines expires metadata to use.'),
      new HoverInfoEntry('description', 'Inlines description metadata to use.'),
    ]
  ),
]
