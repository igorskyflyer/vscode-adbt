import * as vscode from 'vscode'

export function getAriaMetaProps(): vscode.CompletionItem[] {
  const itemTitle: vscode.CompletionItem = new vscode.CompletionItem(
    'title',
    vscode.CompletionItemKind.Property
  )
  itemTitle.detail = 'Metadata title'
  itemTitle.insertText = 'title'
  itemTitle.documentation = 'Title to insert into metadata.'

  const itemDescription: vscode.CompletionItem = new vscode.CompletionItem(
    'description',
    vscode.CompletionItemKind.Property
  )
  itemDescription.detail = 'Metadata description'
  itemDescription.insertText = 'description'
  itemDescription.documentation = 'Description to insert into metadata.'

  const itemExpires: vscode.CompletionItem = new vscode.CompletionItem(
    'expires',
    vscode.CompletionItemKind.Property
  )
  itemExpires.detail = 'Metadata expires'
  itemExpires.insertText = 'expires'
  itemExpires.documentation = 'Expires to insert into metadata.'

  return [itemTitle, itemDescription, itemExpires]
}
