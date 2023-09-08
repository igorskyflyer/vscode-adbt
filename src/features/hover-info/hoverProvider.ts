import * as vscode from 'vscode'
import { findToken } from './HoverInfoText'

export function provideHover(
  document: vscode.TextDocument,
  position: vscode.Position
): vscode.Hover | undefined {
  const wordRange: vscode.Range | undefined =
    document.getWordRangeAtPosition(position)

  if (!wordRange) {
    return new vscode.Hover('No information available.')
  }

  const stringRange: vscode.Range | undefined = document.getWordRangeAtPosition(
    position,
    /'[^']*'/
  )

  if (stringRange) {
    return new vscode.Hover('A UTF-8 encoded string.')
  }

  const word: string = document.getText(wordRange)
  const currentLine: vscode.TextLine = document.lineAt(position.line)

  if (position.character <= currentLine.range.end.character) {
    const lineText: string = currentLine.text
    const wordRange: vscode.Range | undefined =
      document.getWordRangeAtPosition(position)

    if (wordRange) {
      const wordStart: number = wordRange.start.character
      const textBeforeCursor: string = lineText.substring(0, wordStart).trim()
      return findToken(word, textBeforeCursor)
    }
  } else {
    return findToken(word, word)
  }

  return new vscode.Hover('No information available.')
}
