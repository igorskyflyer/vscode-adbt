import * as vscode from 'vscode'

export function getCommentModifiers(): vscode.CompletionItem[] {
  const itemTodo: vscode.CompletionItem = new vscode.CompletionItem(
    'TODO',
    vscode.CompletionItemKind.Text
  )
  itemTodo.detail = 'TODO'
  itemTodo.documentation = 'A TODO comment label.'

  // new vscode.CompletionItem('TODO: '),
  //       new vscode.CompletionItem('FIXME: '),
  //       new vscode.CompletionItem('NOTE: '),

  return [itemTodo]
}
