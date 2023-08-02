import * as vscode from 'vscode'

export function getDirectives(): vscode.CompletionItem[] {
  const itemAdblockDirective: vscode.CompletionItem = new vscode.CompletionItem(
    '[Adblock Plus]',
    vscode.CompletionItemKind.Snippet
  )
  itemAdblockDirective.detail = '@'
  itemAdblockDirective.documentation = 'Inserts a header directive.'
  itemAdblockDirective.insertText = '[Adblock Plus ${1:"2.0"}]'

  return [itemAdblockDirective]
}
