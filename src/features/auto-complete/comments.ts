import * as vscode from 'vscode'

export function getCommentModifiers(): vscode.CompletionItem[] {
  const itemTodo: vscode.CompletionItem = new vscode.CompletionItem(
    'TODO',
    vscode.CompletionItemKind.Text
  )
  itemTodo.detail = 'TODO'
  itemTodo.documentation = 'A TODO comment label.'
  itemTodo.insertText = 'TODO: '

  return [itemTodo]
}
