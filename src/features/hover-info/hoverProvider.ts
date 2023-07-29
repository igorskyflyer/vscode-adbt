import * as vscode from 'vscode'
import { HoverInfoText } from './HoverInfoText'
import { HoverToken } from './HoverToken'

export function provideHover(
  document: vscode.TextDocument,
  position: vscode.Position
): vscode.Hover | undefined {
  const wordRange: vscode.Range | undefined =
    document.getWordRangeAtPosition(position)
  let hoverText: string = 'No information available.'

  if (!wordRange) {
    return new vscode.Hover(hoverText)
  }

  const word: string = document.getText(wordRange)

  if (word in HoverInfoText) {
    hoverText = HoverInfoText[word as HoverToken]
  }

  return new vscode.Hover(hoverText)
}
