import * as vscode from 'vscode'
import { provideCompletionItems } from './features/auto-complete/autoCompleteProvider'
import { provideHover } from './features/hover-info/hoverProvider'

function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      'adbt',
      {
        provideCompletionItems,
      },
      '[',
      '@',
      '#'
    ),
    vscode.languages.registerHoverProvider('adbt', {
      provideHover,
    })
  )
}

module.exports = {
  activate,
}
