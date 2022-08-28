import { LocaleType } from '@/enum/locale'
import { themeStore } from '@/pinia/theme'
import { computed } from 'vue'
import { i18n } from '.'
// type MyPick<T, K extends keyof T> = {
//   [P in K] : T[P]
// }
export function useI18n() {
  const { t, ...methods } = i18n.global
  function setLocal(key: LocaleType) {
    const store = themeStore()
    localStorage.setItem('locale', key)
    i18n.global.locale = key
    store.language = key
    location.reload()
  }
  const getLocal = computed(() => i18n.global.locale)
  const tFn = (key: string) => t(key)
  return {
    getLocal,
    setLocal,
    t: tFn,
    ...methods,
  }
}
