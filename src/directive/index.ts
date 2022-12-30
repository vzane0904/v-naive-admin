import { App } from 'vue'
const modules = import.meta.globEager('./modules/**/*.ts')
const installAllDirective = function (app: App<Element>) {
  Object.keys(modules).forEach(async (item) => {
    const default1 =
      (modules[item] as any).default ||
      (modules[item] as any)[Object.keys(modules[item] as any)[0]]

    if (default1) {
      app.use(default1)
    } else {
      console.error('eeee')
    }
  })
}
export default installAllDirective
