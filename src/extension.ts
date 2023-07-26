import * as vscode from 'vscode'

function provideCompletionItems() {
  const itemInclude: vscode.CompletionItem = new vscode.CompletionItem(
    'include',
    vscode.CompletionItemKind.Function
  )
  const itemHeader: vscode.CompletionItem = new vscode.CompletionItem(
    'header',
    vscode.CompletionItemKind.Function
  )
  const itemExport: vscode.CompletionItem = new vscode.CompletionItem(
    'export',
    vscode.CompletionItemKind.Function
  )
  const itemNl: vscode.CompletionItem = new vscode.CompletionItem(
    'nl',
    vscode.CompletionItemKind.Function
  )

  itemInclude.detail = 'Include a filter file.'
  itemInclude.insertText = "include ''"

  itemHeader.detail = 'Include a header file.'
  itemHeader.insertText = "header ''"

  itemExport.detail = 'Export all rules to a filter file.'
  itemExport.insertText = "export ''"

  itemNl.detail = 'Insert a blank newline.'

  return [itemInclude, itemExport, itemNl]
}

function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider('adbt', {
      provideCompletionItems,
    })
  )
}

module.exports = {
  activate,
}
