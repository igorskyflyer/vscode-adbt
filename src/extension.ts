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
  itemHeader.detail = 'header path: string'
  itemHeader.insertText = new vscode.SnippetString(
    "header '${1:<header_path>}'"
  )
  itemHeader.documentation =
    "Includes a header file. If the path argument doesn't exist or is invalid, Aria will abort compilation."

  const itemExport: vscode.CompletionItem = new vscode.CompletionItem(
    'export',
    vscode.CompletionItemKind.Function
  )

  itemExport.detail = 'export path: string'
  itemExport.insertText = new vscode.SnippetString("export '${1:<file_path>}'")
  itemExport.documentation =
    "Export all rules to the provided filepath. If the path argument doesn't exist or is invalid, Aria will abort compilation."

  const itemNl: vscode.CompletionItem = new vscode.CompletionItem(
    'nl',
    vscode.CompletionItemKind.Function
  )

  itemNl.detail = 'nl (LF)'
  itemNl.documentation = 'Inserts a blank newline (LF).'

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
