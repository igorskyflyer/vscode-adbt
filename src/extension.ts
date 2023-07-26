import * as vscode from 'vscode'
import { provideCompletionItems } from './features/auto-complete/autoCompleteProvider'
import { HoverInfoText } from './features/hover-info/HoverInfoText'
import { HoverToken } from './features/hover-info/HoverToken'

function provideHover(
  document: vscode.TextDocument,
  position: vscode.Position
) {
  const wordRange: vscode.Range | undefined =
    document.getWordRangeAtPosition(position)

  if (!wordRange) {
    return
  }

  const word: string = document.getText(wordRange)
  let hoverText: string = ''

  if (word in HoverInfoText) {
    hoverText = HoverInfoText[word as HoverToken]
  }

  return new vscode.Hover(hoverText)
}

function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider('adbt', {
      provideCompletionItems,
    }),
    vscode.languages.registerHoverProvider('adbt', {
      provideHover,
    })
  )
}

module.exports = {
  activate,
}
