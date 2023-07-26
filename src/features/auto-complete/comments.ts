import * as vscode from 'vscode'

export function getComments(): vscode.CompletionItem[] {
  const itemInternal: vscode.CompletionItem = new vscode.CompletionItem(
    '@',
    vscode.CompletionItemKind.Snippet
  )
  itemInternal.detail = '@'
  itemInternal.documentation = 'Inserts an internal comment.'
  itemInternal.insertText = '@ '

  return [itemInternal]
}
