import { Record } from '../src/type'
const booleanStr = ['true', 'false']
const transBoolean = (value: string): Boolean => value === booleanStr[0]
const transNum = (value: string): Number => Number(value)
export const wrapperEnv = (envConf: Record<any>): ViteEnv => {
  let env: any = {}
  for (const envName of Object.keys(envConf)) {
    if (envName === 'VITE_APP_PORT') {
      env[envName] = transNum(envConf[envName])
    } else if (envName === 'VITE_APP_SOURCEMAP') {
      if (booleanStr.includes(envConf[envName])) {
        env[envName] = transBoolean(envConf[envName])
      } else {
        env[envName] = envConf[envName]
      }
    } else if (
      [
        'VITE_APP_HTTPS',
        'VITE_APP_LOG',
        'VITE_APP_OPEN',
        'VITE_APP_MOCK',
        'VITE_APP_ANALYSIS',
      ].includes(envName)
    ) {
      env[envName] = transBoolean(envConf[envName])
    } else if (envName === 'VITE_APP_PROXY') {
      env[envName] = JSON.parse(envConf[envName].replace(/"/g, '"'))
    } else {
      env[envName] = envConf[envName]
    }
  }
  return env
}
