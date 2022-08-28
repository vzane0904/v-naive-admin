import { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

export const setupPinia = (app: App<Element>) => {
  app.use(createPinia().use(piniaPersist))
  // console.log(
  //   '%c[Pinia] devtools support enabled %c\nread more at https://pinia.vuejs.org/',
  //   'background:#0ea5e9; color:white; padding: 1px 4px; border-radius: 3px;font-size:12px',
  //   '',
  // )
}
