import * as vscode from 'vscode'

function provideCompletionItems() {
  const itemInclude: vscode.CompletionItem = new vscode.CompletionItem(
    'include',
    vscode.CompletionItemKind.Function
  )
  const itemExport: vscode.CompletionItem = new vscode.CompletionItem(
    'export',
    vscode.CompletionItemKind.Function
  )

  itemInclude.detail = 'Includes at filter file.'
  itemExport.detail = 'Exports all rules to a filter file.'

  return [itemInclude, itemExport]
}

function activate(context: vscode.ExtensionContext) {
  // Register the completion provider when the extension is activated
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider('adbt', {
      provideCompletionItems,
    })
  )
}

module.exports = {
  activate,
}
