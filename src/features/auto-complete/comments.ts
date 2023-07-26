import * as vscode from 'vscode'

export function getComments(): vscode.CompletionItem[] {
  const itemInternal: vscode.CompletionItem = new vscode.CompletionItem(
    '@',
    vscode.CompletionItemKind.Snippet
  )
  itemInternal.detail = '@'
  itemInternal.documentation = 'Inserts an internal comment.'
  itemInternal.insertText = '@ '

  const itemExported: vscode.CompletionItem = new vscode.CompletionItem(
    '#',
    vscode.CompletionItemKind.Snippet
  )
  itemExported.detail = '#'
  itemExported.documentation = 'Inserts an exported comment.'
  itemExported.insertText = '# '

  return [itemInternal, itemExported]
}
