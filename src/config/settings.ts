import { ProjectConfig } from '@/type/config'
const settings: ProjectConfig = {
  layout: 1,
  themeColor: '#409eff',
  progressBar: true,
  header: {
    color: '#ffffff',
    height: 48,
    language: 'zh_CN',
    isFullScreenBtn: true,
    showLanGuaGe: true,
    showTopSet: true,
    foldBtnPosition: 'top',
    showLogo: true,
  },
  sider: {
    color: '#001529',
    fold: false,
    width: 210,
    showSider: true,
    isAccordion: true,
  },
  footer: {
    height: 48,
    showFooter: true,
  },
  tabs: {
    showTabs: true,
    showRefresh: true,
  },
}
export default settings
