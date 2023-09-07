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

  const itemAdbtInfo: vscode.CompletionItem = new vscode.CompletionItem(
    'ADBT version',
    vscode.CompletionItemKind.Snippet
  )

  itemAdbtInfo.detail = '@ [ADBT: x.x.x]'
  itemAdbtInfo.documentation = new vscode.MarkdownString(
    'Inserts current ADBT version being used.\n\n*Does **not** affect the compiler, use for informational purposes only.*'
  )
  itemAdbtInfo.insertText = new vscode.SnippetString('@ [ADBT: 2.0.0]')

  return [itemInternal, itemExported, itemAdbtInfo]
}
