import { LocaleType } from '@/enum/locale'
import {
  themeColor,
  headerColor,
  siderColor,
} from '@/layouts/default/components/right/src/config'
export type Position = 'top' | 'none' | 'bottom'
export interface ProjectConfig {
  layout: 1 | 2 | 3 | 4
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
