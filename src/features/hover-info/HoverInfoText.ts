import { HoverToken } from './HoverToken'

export const HoverInfoText: Record<HoverToken, string> = {
  include:
    "Includes a filter file. If the path argument doesn't exist or is invalid, Aria will abort compilation.",
  header:
    "Includes a header file. If the path argument doesn't exist or is invalid, Aria will abort compilation.",
  export:
    "Exports all rules to the provided filepath. If the path argument doesn't exist or is invalid, Aria will abort compilation.",
  nl: 'Inserts a blank newline (LF).',
  '@': 'Inserts an internal comment. After insertion, trigger auto-complete again to show comment modifiers, i.e. TODO, FIXME, NOTE.',
  '#': 'Inserts an exported comment. After insertion, trigger auto-complete again to show comment modifiers, i.e. TODO, FIXME, NOTE.',
}
