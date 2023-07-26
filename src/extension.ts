import * as vscode from 'vscode'
import { getAriaFunctions } from './features/auto-complete/functions'

function provideCompletionItems(
  document: vscode.TextDocument,
  position: vscode.Position
) {
  return [...getAriaFunctions()]
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
