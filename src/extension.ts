import * as vscode from 'vscode'
import { getAriaFunctions } from './features/auto-complete/functions'
import { tokenType } from './features/auto-complete/tokenType'
import { getCommentModifiers } from './features/auto-complete/comment-modifiers'
import { getComments } from './features/auto-complete/comments'

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

function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider('adbt', {
      provideCompletionItems,
    })
  )
}

module.exports = {
  activate,
}
