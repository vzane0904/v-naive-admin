import { LocaleType } from '@/enum/locale'
import { headerColor, siderColor, themeColor } from '@/config'
import { Layout, Position } from '@/type/config'
import { defineStore } from 'pinia'
import settings from '@/config/settings'

export const themeStore = defineStore({
  id: 'themeStore',
  state: () => ({
    theme: false, //主题 darkTheme | light
    layout: settings.layout as Layout, //页面布局模式
    themeColor: settings.themeColor as typeof themeColor[number], //主题颜色
    headerColor: settings.header.color as typeof headerColor[number], //顶部颜色
    siderColor: settings.sider.color as typeof siderColor[number], //左侧菜单颜色
    siderFold: settings.sider.fold, //是否折叠
    foldBtnPosition: settings.header.foldBtnPosition as Position, //折叠菜单按钮位置
    isAccordion: settings.sider.isAccordion, //手风琴模式
    siderWidth: settings.sider.width, //正常宽度
    headerHeight: settings.header.height, //顶部高度
    footerHeight: settings.footer.height, //底部高度
    showTabs: settings.tabs.showTabs, //显示标签页
    showRefresh: settings.tabs.showRefresh, //显示刷新按钮
    showSider: settings.sider.showSider, //显示左侧菜单
    showLogo: settings.header.showLogo, //显示logo
    isFullScreenBtn: settings.header.isFullScreenBtn, //是否显示全屏按钮
    showFooter: settings.footer.showFooter, //显示footer
    showLanGuaGe: settings.header.showLanGuaGe, //显示多语言切换
    showTopSet: settings.header.showTopSet, //顶部设置按钮
    language: settings.header.language as LocaleType,
    progressBar: settings.progressBar, //进度条
    isFullScreen: false, //是否全屏
    collapsedWidth: 48, //左侧菜单折叠宽度
    switchLoading: true, //切换显示loading
    toggleAnimation: true, //切换页面显示动画
    animationType: '动画1', //动画类型
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
})
