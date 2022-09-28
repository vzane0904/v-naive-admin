import { themeStore } from '@/pinia/modules/theme'
const { theme } = storeToRefs(themeStore())
export const useConfig = () => {
  const getConfig = (key: 'bg') => {
    const bg = ref()
    if (key === 'bg') {
      watchEffect(() => {
        bg.value = { 'background-color': theme.value ? '#3a3b3c4d' : '#fff' }
      })
    }
    return { bg }
    // return undefined
  }
  return {
    getConfig,
  }
}
