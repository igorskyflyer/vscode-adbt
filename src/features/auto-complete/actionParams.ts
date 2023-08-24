import * as vscode from 'vscode'

const itemSortAsc: vscode.CompletionItem = new vscode.CompletionItem(
  'asc',
  vscode.CompletionItemKind.Constant
)
itemSortAsc.detail = 'Sort'
itemSortAsc.insertText = 'asc'
itemSortAsc.documentation = 'Sort in ascending order.'

const itemSortDesc: vscode.CompletionItem = new vscode.CompletionItem(
  'desc',
  vscode.CompletionItemKind.Constant
)
itemSortDesc.detail = 'Sort'
itemSortDesc.insertText = 'desc'
itemSortDesc.documentation = 'Sort in descending order.'

const itemStripModifiers: vscode.CompletionItem = new vscode.CompletionItem(
  'modifiers',
  vscode.CompletionItemKind.Constant
)
itemStripModifiers.detail = 'Strip'
itemStripModifiers.insertText = 'modifiers'
itemStripModifiers.documentation = 'Strip out all modifiers.'

const itemStripComments: vscode.CompletionItem = new vscode.CompletionItem(
  'comments',
  vscode.CompletionItemKind.Constant
)
itemStripComments.detail = 'Strip'
itemStripComments.insertText = 'comments'
itemStripComments.documentation = 'Strip out all comments.'

export const AriaActionParams = {
  sort: [itemSortAsc, itemSortDesc],
  strip: [itemStripModifiers, itemStripComments],
} as const

export function getActionParams(
  modifier: string
): (typeof AriaActionParams)[keyof typeof AriaActionParams] {
  return AriaActionParams[modifier as keyof typeof AriaActionParams]
}
