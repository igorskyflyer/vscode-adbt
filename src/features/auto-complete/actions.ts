import * as vscode from 'vscode'

export function getAriaActions(): vscode.CompletionItem[] {
  const itemDedupe: vscode.CompletionItem = new vscode.CompletionItem(
    'dedupe',
    vscode.CompletionItemKind.Property
  )
  itemDedupe.detail = 'Dedupe action'
  itemDedupe.insertText = 'dedupe'
  itemDedupe.documentation = 'Remove duplicate entries.'

  const itemSort: vscode.CompletionItem = new vscode.CompletionItem(
    'sort',
    vscode.CompletionItemKind.Property
  )
  itemSort.detail = 'Sort action'
  itemSort.insertText = new vscode.SnippetString('sort = ${1|asc,desc|}')
  itemSort.documentation = new vscode.MarkdownString(
    'Sort entries, either in *ascending* or *descending* order.\n\nYou can pass an optional value:\n- **asc** - ascending order (**default**)\n- **desc** - descending order.'
  )

  const itemTrim: vscode.CompletionItem = new vscode.CompletionItem(
    'trim',
    vscode.CompletionItemKind.Property
  )
  itemTrim.detail = 'Trim action'
  itemTrim.insertText = 'trim'
  itemTrim.documentation = 'Trim whitespace for each entry.'

  const itemAppend: vscode.CompletionItem = new vscode.CompletionItem(
    'append',
    vscode.CompletionItemKind.Property
  )
  itemAppend.detail = 'Append action'
  itemAppend.insertText = new vscode.SnippetString("append = '${1:<value>}'")
  itemAppend.documentation = 'Append a string to each entry.'

  const itemStrip: vscode.CompletionItem = new vscode.CompletionItem(
    'strip',
    vscode.CompletionItemKind.Property
  )
  itemStrip.detail = 'Strip action'
  itemStrip.insertText = new vscode.SnippetString(
    'strip = ${1|modifiers,comments|}'
  )
  itemStrip.documentation = new vscode.MarkdownString(
    'Strip each entry of a certain element.\n\nCurrently supported elements are:\n- **modifiers** - modifiers, e.g. **_$third-party_**, **_$script_**, etc.\n- **comments** - comments.'
  )

  return [itemDedupe, itemSort, itemTrim, itemAppend, itemStrip]
}
