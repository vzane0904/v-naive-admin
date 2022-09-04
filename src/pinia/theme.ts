import { colorFFF } from '@/config'
import { Locale } from '@/enum/locale'
import { defineStore } from 'pinia'
export const themeStore = defineStore({
  id: 'themeStore',
  state: () => ({
    theme: false, //主题 darkTheme | light
    layout: 1, //页面布局模式
    themeColor: '#409eff', //主题颜色
    headerColor: colorFFF, //顶部颜色
    siderColor: '#001529', //左侧菜单颜色
    siderFold: false, //是否折叠
    foldBtnPosition: 'top', //折叠菜单按钮位置
    isAccordion: true, //手风琴模式
    siderWidth: 210, //正常宽度
    headerHeight: 48, //顶部高度
    footerHeight: 48, //底部高度
    showTabs: true, //显示标签页
    showRefresh: true, //显示刷新按钮
    showSider: true, //显示左侧菜单
    showLogo: true, //显示logo
    isFullScreenBtn: true, //是否显示全屏按钮
    showFooter: true, //显示footer
    showLanGuaGe: true, //显示多语言切换
    showTopSet: true, //顶部设置按钮
    language: Locale.ZH_CN,
    progressBar: true, //进度条

    isFullScreen: false, //是否全屏
    collapsedWidth: 48, //左侧菜单折叠宽度
    switchLoading: true, //切换显示loading
    toggleAnimation: true, //切换页面显示动画
    animationType: '动画1', //动画类型
  }), //存放数据
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
