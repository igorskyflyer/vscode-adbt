import * as vscode from 'vscode'

export function getAriaFunctions(): vscode.CompletionItem[] {
  const itemInclude: vscode.CompletionItem = new vscode.CompletionItem(
    'include',
    vscode.CompletionItemKind.Function
  )
  itemInclude.detail = 'include filter_path: string'
  itemInclude.insertText = new vscode.SnippetString(
    "include '${1:<filter_path>}'"
  )
  itemInclude.documentation =
    "Includes a filter file. If the path argument doesn't exist or is invalid, Aria will abort compilation."

  const itemHeader: vscode.CompletionItem = new vscode.CompletionItem(
    'header',
    vscode.CompletionItemKind.Function
  )
  itemHeader.detail = 'header header_path: string'
  itemHeader.insertText = new vscode.SnippetString(
    "header '${1:<header_path>}'"
  )
  itemHeader.documentation =
    "Includes a header file. If the path argument doesn't exist or is invalid, Aria will abort compilation."

  const itemExport: vscode.CompletionItem = new vscode.CompletionItem(
    'export',
    vscode.CompletionItemKind.Function
  )

  itemExport.detail = 'export file_path: string'
  itemExport.insertText = new vscode.SnippetString("export '${1:<file_path>}'")
  itemExport.documentation =
    "Exports all rules to the provided filepath. If the path argument doesn't exist or is invalid, Aria will abort compilation."

  const itemNl: vscode.CompletionItem = new vscode.CompletionItem(
    'nl',
    vscode.CompletionItemKind.Function
  )

  itemNl.detail = 'nl (LF)'
  itemNl.documentation = 'Inserts a blank newline (LF).'

  const itemImport: vscode.CompletionItem = new vscode.CompletionItem(
    'import',
    vscode.CompletionItemKind.Function
  )
  itemImport.detail = 'import filter_path: string'
  itemImport.insertText = new vscode.SnippetString(
    "import '${1:<filter_path>}'"
  )
  itemImport.documentation =
    "Includes a filter file and prepends its file path as a comment. If the path argument doesn't exist or is invalid, Aria will abort compilation."

  const itemTag: vscode.CompletionItem = new vscode.CompletionItem(
    'tag',
    vscode.CompletionItemKind.Function
  )
  itemInclude.detail = 'tag description: string'
  itemInclude.insertText = new vscode.SnippetString("tag '${1:<description>}'")
  itemInclude.documentation =
    'Includes a tag - special, auto-enumerated comment with an optional description. Useful for code navigation, searching, etc.'

  return [itemInclude, itemHeader, itemExport, itemNl, itemImport, itemTag]
}
