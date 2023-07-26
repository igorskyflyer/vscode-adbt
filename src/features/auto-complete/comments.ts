import * as vscode from 'vscode'

export function getCommentModifiers(): vscode.CompletionItem[] {
  const itemTodo: vscode.CompletionItem = new vscode.CompletionItem(
    'TODO',
    vscode.CompletionItemKind.Text
  )
  itemTodo.detail = 'TODO'
  itemTodo.documentation = 'A TODO comment label.'
  itemTodo.insertText = 'TODO: '

  const itemFixMe: vscode.CompletionItem = new vscode.CompletionItem(
    'FIXME',
    vscode.CompletionItemKind.Text
  )
  itemFixMe.detail = 'FIXME'
  itemFixMe.documentation = 'A FIXME comment label.'
  itemFixMe.insertText = 'FIXME: '

  const itemNote: vscode.CompletionItem = new vscode.CompletionItem(
    'NOTE',
    vscode.CompletionItemKind.Text
  )
  itemNote.detail = 'NOTE'
  itemNote.documentation = 'A NOTE comment label.'
  itemNote.insertText = 'NOTE: '

  return [itemTodo, itemFixMe, itemNote]
}
