import { AliasOptions } from 'vite'
import { aliasList } from './alias'
export const createAlias = (path: string) => {
  let alias: Array<AliasOptions> = []
  for (const item of aliasList) {
    alias.push({
      find: item[0],
      replacement: path + item[1],
    })
  }
  return alias
}
