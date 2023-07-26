import * as vscode from 'vscode'

function provideCompletionItems() {
  const itemInclude: vscode.CompletionItem = new vscode.CompletionItem(
    'include',
    vscode.CompletionItemKind.Function
  )
  itemInclude.detail = 'include path: string'
  itemInclude.insertText = new vscode.SnippetString(
    "include '${1:<filter_path>}'"
  )
  itemInclude.documentation =
    "Includes a filter file. If the path argument doesn't exist or is invalid, Aria will abort compilation."

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

  itemHeader.detail = 'Include a header file.'
  itemHeader.insertText = new vscode.SnippetString(
    "header '${1:<header_path>}'"
  )

  itemExport.detail = 'Export all rules to a filter file.'
  itemExport.insertText = new vscode.SnippetString("export '${1:<file_path>}'")

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
