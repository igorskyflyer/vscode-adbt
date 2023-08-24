import * as vscode from 'vscode'

export function getAriaFlags(): vscode.CompletionItem[] {
  const itemDedupe: vscode.CompletionItem = new vscode.CompletionItem(
    'dedupe',
    vscode.CompletionItemKind.Property
  )
  itemDedupe.detail = 'Dedupe flag'
  itemDedupe.insertText = new vscode.SnippetString('dedupe')
  itemDedupe.documentation = 'Removes duplicate entries.'

  const itemSort: vscode.CompletionItem = new vscode.CompletionItem(
    'sort',
    vscode.CompletionItemKind.Property
  )
  itemSort.detail = 'Sort flag'
  itemSort.insertText = new vscode.SnippetString('sort')
  itemSort.documentation = new vscode.MarkdownString(
    'Sort entries (**asc**/**desc**).'
  )

  const itemTrim: vscode.CompletionItem = new vscode.CompletionItem(
    'trim',
    vscode.CompletionItemKind.Property
  )
  itemTrim.detail = 'Trim flag'
  itemTrim.insertText = new vscode.SnippetString('trim')
  itemTrim.documentation = 'Trims whitespace for each entry.'

  const itemAppend: vscode.CompletionItem = new vscode.CompletionItem(
    'append',
    vscode.CompletionItemKind.Property
  )
  itemAppend.detail = 'Append flag'
  itemAppend.insertText = new vscode.SnippetString("append = '${1:<value>}'")
  itemAppend.documentation = 'Appends a string to each entry.'

  const itemStrip: vscode.CompletionItem = new vscode.CompletionItem(
    'strip',
    vscode.CompletionItemKind.Property
  )
  itemStrip.detail = 'Strip flag'
  itemStrip.insertText = new vscode.SnippetString(
    'strip = ${1|modifiers,comments|}'
  )
  itemStrip.documentation = 'Strips each entry of a certain value.'

  return [itemDedupe, itemSort, itemTrim, itemAppend, itemStrip]
}
