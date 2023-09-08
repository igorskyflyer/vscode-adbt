export interface IHoverInfoEntry {
  token: string
  info: string
}

export class HoverInfoEntry implements IHoverInfoEntry {
  token: string
  info: string
  subtokens: IHoverInfoEntry[]

  constructor(token: string, info: string, subtokens?: IHoverInfoEntry[]) {
    this.token = token
    this.info = info
    this.subtokens = subtokens || []
  }
}
