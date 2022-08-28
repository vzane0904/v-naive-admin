import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { I18n, I18nOptions } from 'vue-i18n'
import { set } from 'lodash-es'
import { Locale } from '@/enum/locale'
export let i18n: ReturnType<typeof createI18n>
export const lacalName = 'locale'
const locale = localStorage.getItem(lacalName) ?? Locale.ZH_CN
export function getMsg(
  langs: Record<string, Record<string, any>>,
  prefix = 'language',
) {
  const obj: any = {}
  Object.keys(langs).forEach((key) => {
    const data = langs[key].default
    let fileName = key.replace(`./${prefix}/`, '').replace(/^\.\//, '')
    const lastIndex = fileName.lastIndexOf('.')
    fileName = fileName.substring(0, lastIndex)
    const keyList = fileName.split('/')
    const moduleName = keyList.shift()
    const objKey = keyList.join('.')
    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {})
        set(obj[moduleName], objKey, data)
      } else {
        set(obj, moduleName, data || {})
      }
    }
  })
  return obj
}
const createI18nOptions = async () => {
  return {
    locale,
    silentFallbackWarn: true,
    silentTranslationWarn: true,
    legacy: false, // you must specify 'legacy: false' option 指定false时切换语言不会生效 需要刷新页面 如果为true切换语言会生效 但是控制台会有警告
    fallbackLocale: Locale.ZH_CN, //没有英文的时候默认中文语言
    globalInjection: true, // 全局模式，可以直接使用 $t
    messages: getMsg(import.meta.globEager('./language/**/*.ts')),
  }
}
export const setupI18n = async (app: App<Element>) => {
  const options: I18nOptions = await createI18nOptions()
  i18n = createI18n(options) as I18n
  app.use(i18n)
}
