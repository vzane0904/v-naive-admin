import { themeStore } from '@/pinia/theme'
import { TabsThemeVars } from 'naive-ui/lib/tabs/styles'

export const TabsThemeConfig = (): Partial<TabsThemeVars> => {
  const store = themeStore()
  const { theme } = storeToRefs(store)
  return {
    tabColor: unref(theme) ? '#0c2135' : '#fff',
    tabBorderColor: unref(theme) ? '#303030' : '#d9d9d9', //边框颜色
    tabTextColorActiveBar: 'red',
    tabTextColorActiveCard: '#fff', //字体颜色
    tabTextColorActiveLine: 'blue',
    tabFontWeightActive: '700', //字体粗细
    tabTextColorCard: theme.value ? '#c9d1d9' : '#666', //正常字体颜色
    closeColorHover: '#fff',
    tabGapMediumCard: '4px', //每个tabs之间的间距
    tabPaddingMediumCard: '2px 21px', //大小
    tabTextColorHoverCard: 'red',
  }
}
