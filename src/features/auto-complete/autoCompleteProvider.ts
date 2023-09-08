import * as vscode from 'vscode'
import { AriaActionParams, getActionParams } from './actionParams'
import { getAriaActions } from './actions'
import { getCommentModifiers } from './commentModifiers'
import { getComments } from './comments'
import { getDirectives } from './directives'
import { getAriaFunctions } from './functions'
import { tokenType } from './tokenType'
import { getAriaMetaProps } from './metaProps'

// cache these
const expInclude = /(import|include)\s+'([^']*)'/i
const expMeta = /^meta\s+/i

export function provideCompletionItems(
  document: vscode.TextDocument,
  position: vscode.Position
): vscode.CompletionItem[] {
  const items: vscode.CompletionItem[] = []
  const lineText: string = document.lineAt(position.line).text
  const textBeforeCursor: string = lineText.substring(0, position.character)

  const matchInclude = lineText.match(expInclude)
  const matchMeta = lineText.match(expMeta)

  if (textBeforeCursor.startsWith('[')) {
    items.push(...getDirectives())
  } else if (
    textBeforeCursor.startsWith(tokenType.internalComment) ||
    textBeforeCursor.startsWith(tokenType.exportedComment)
  ) {
    items.push(...getCommentModifiers())
  } else if (matchInclude) {
    if (textBeforeCursor.trim().endsWith('=')) {
      const probeAction: RegExpMatchArray | null = textBeforeCursor.match(
        /(?:import|include)\s+'(?:[^']*)'\s+(sort|strip)/i
      )

      if (probeAction && probeAction.length === 2) {
        const action: string = probeAction[1]

        if (action in AriaActionParams) {
          items.push(...getActionParams(action))
        }
      }
    } else if (
      position.character >
      matchInclude.index! + matchInclude[0].length
    ) {
      items.push(...getAriaActions())
    }
  } else if (matchMeta) {
    items.push(...getAriaMetaProps())
  } else if (textBeforeCursor.indexOf("'") === -1) {
    items.push(...getAriaFunctions(), ...getComments())
  }

  return items
}
