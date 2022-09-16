import { LocaleType } from '@/enum/locale'
import { themeColor, headerColor, siderColor } from '@/config'
export type Position = 'top' | 'none' | 'bottom'
export type Layout = 1 | 2 | 3
export interface ProjectConfig {
  layout: Layout
  themeColor: typeof themeColor[number]
  progressBar: boolean
  header: {
    color: typeof headerColor[number]
    height: number
    language: LocaleType
    isFullScreenBtn: boolean
    showLanGuaGe: boolean
    showTopSet: boolean
    foldBtnPosition: Position
    showLogo: boolean
  }
  sider: {
    color: typeof siderColor[number]
    fold: boolean
    width: number
    showSider: boolean
    isAccordion: boolean
  }
  footer: {
    height: number
    showFooter: boolean
  }
  tabs: {
    showTabs: boolean
    showRefresh: boolean
  }
}
