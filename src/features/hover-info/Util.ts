export function isPath(word: string): boolean {
  if (typeof word !== 'string') return false

  return /^'(.*)'$/i.test(word)
}
