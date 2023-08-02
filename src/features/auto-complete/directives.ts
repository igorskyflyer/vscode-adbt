import * as vscode from 'vscode'

export function getDirectives(): vscode.CompletionItem[] {
  const itemAdblockDirective: vscode.CompletionItem = new vscode.CompletionItem(
    '[Adblock Plus]',
    vscode.CompletionItemKind.Snippet
  )
  itemAdblockDirective.detail = '[Adblock Plus]'
  itemAdblockDirective.documentation = 'Inserts a header directive.'
  // intentionally drop the first square bracket
  // because '[' is set as as trigger character
  itemAdblockDirective.insertText = new vscode.SnippetString(
    'Adblock Plus ${1:2.0}]'
  )

  return [itemAdblockDirective]
}
