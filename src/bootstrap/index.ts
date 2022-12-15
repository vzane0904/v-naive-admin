import { App } from 'vue'
import { setupPinia } from '@/pinia'
import { setRoute } from '@/router'
import { getFullScreen } from '@/utils/fullScreen'
import { setupI18n } from '@/locales'
import '@/naive/index'
import installAllDirective from '@/directive'
export const bootstrap = (app: App<Element>) => {
  setupPinia(app)
  setRoute(app)
  getFullScreen()
  setupI18n(app)
  installAllDirective(app)
  app.mount('#app')
}
