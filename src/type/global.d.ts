/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, {}, any>
  export default component
}
declare interface Window {
  $message: any
  $useDialog: any
  $useNotification: any
}
declare interface ViteEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_PORT: number
  VITE_APP_BUILD: string
  VITE_APP_HTTPS: boolean
  VITE_APP_LOG: boolean
  VITE_APP_OPEN: boolean
  VITE_APP_PATH: string
  VITE_APP_PROXY: Array<[string, string]>
  VITE_APP_SOURCEMAP: boolean
  VITE_APP_PREFIXCLS: string
  VITE_APP_MOCK: boolean
  VITE_APP_ANALYSIS: boolean
  VITE_APP_PROD_MOCK: boolean
}
