import { App } from 'vue'
import 'default-passive-events'
import { setupPinia } from '@/pinia'
import { setRoute } from '@/router'
import { getFullScreen } from '@/utils/fullScreen'
import { setupI18n } from '@/locales'
import '@/naive/index'
export const bootstrap = (app: App<Element>) => {
  setupPinia(app)
  setRoute(app)
  getFullScreen()
  setupI18n(app)
  app.mount('#app')
}
