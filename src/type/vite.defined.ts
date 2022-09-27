import { Recordable } from 'vite-plugin-mock'

export {}
declare global {
  // eslint-disable-next-line no-underscore-dangle
  const __APP_INFO__: {
    pkg: {
      name: string
      version: string
      dependencies: Recordable<string>
      devDependencies: Recordable<string>
    }
    lastBuildTime: string
  }
}
