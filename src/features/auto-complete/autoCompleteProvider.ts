import * as vscode from 'vscode'
import { getCommentModifiers } from './comment-modifiers'
import { getComments } from './comments'
import { getAriaFunctions } from './functions'
import { tokenType } from './tokenType'

export function autoCompleteProvider(
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
