import { wrapperEnv } from '../../build/utils'

export const getEnv = (envName: keyof ViteEnv) => {
  // 解决 [rollup-plugin-dynamic-import-variables] Unexpected token
  return wrapperEnv(import.meta.env)[envName]
}
