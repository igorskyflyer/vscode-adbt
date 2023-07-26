import * as vscode from 'vscode'

export function getComments(): vscode.CompletionItem[] {
  const itemInternal: vscode.CompletionItem = new vscode.CompletionItem(
    '@',
    vscode.CompletionItemKind.Snippet
  )
  itemInternal.detail = '@'
  itemInternal.documentation =
    'Inserts an internal comment. After insertion, trigger auto-complete again to show comment modifiers, i.e. TODO, FIXME, NOTE.'
  itemInternal.insertText = '@ '

  const itemExported: vscode.CompletionItem = new vscode.CompletionItem(
    '#',
    vscode.CompletionItemKind.Snippet
  )
  itemExported.detail = '#'
  itemExported.documentation =
    'Inserts an exported comment. After insertion, trigger auto-complete again to show comment modifiers, i.e. TODO, FIXME, NOTE.'
  itemExported.insertText = '# '

  return [itemInternal, itemExported]
}
