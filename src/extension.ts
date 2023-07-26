import * as vscode from 'vscode'
import { getCommentModifiers } from './features/auto-complete/comment-modifiers'
import { getComments } from './features/auto-complete/comments'
import { getAriaFunctions } from './features/auto-complete/functions'
import { tokenType } from './features/auto-complete/tokenType'
import { HoverInfoText } from './features/hover-info/HoverInfoText'
import { HoverToken } from './features/hover-info/HoverToken'

function provideCompletionItems(
  document: vscode.TextDocument,
  position: vscode.Position
) {
  const items: vscode.CompletionItem[] = []
  const lineText: string = document.lineAt(position.line).text
  const textBeforeCursor: string = lineText.substring(0, position.character)

  if (
    textBeforeCursor.startsWith(tokenType.internalComment) ||
    textBeforeCursor.startsWith(tokenType.exportedComment)
  ) {
    items.push(...getCommentModifiers())
  } else {
    items.push(...getAriaFunctions(), ...getComments())
  }

  return items
}

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
