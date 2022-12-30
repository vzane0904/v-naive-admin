import { RequestEnum } from '@/enum/axios'
import { RoleEnum } from '@/enum/route'
import { SelectMixedOption } from 'naive-ui/lib/select/src/interface'
import { Locale } from '@/enum/locale'
/**
 * @names 是否启用多语言
 * **/
export const isI18n = false
/**
 * @names basic home path
 * **/
export const baseHome = '/home'
/**
 * @names 是否每次刷新页面都请求权限接口
 * **/
export const onLoadGetPermission = true
/**
* @name 路由模式 => 使用方式
  1. 正常路由信息，返回path、和组件名称, 不返回组件地址 会返回当前组件定义的变量 MOVE
  2. 角色控制,根据角色判断能否进入,需要在路由中配置好,可以数组形式存在 ROLE
  3. 动态路由,返回信息具体 BACK
**/
export const permissionMode = RoleEnum.BACK
// 不添加到tabs中
export const noAddTabs = ['redirectPath', 'redirect', '404', 'login']
/**
 * @retryErrorCode:  请求异常时，哪些状态码可以直接重试不需要在配置是否重试重试次数等
 * @ params [401, 404,500]
 **/
export const RETRY_COUNTCODE: Array<Number> = [401]
/**
 * @retryErrorCode:  请求异常时，重试次数
 **/
export const RETRY_COUNT = 3
/**
 * @retryErrorCode:  请求异常时，重试间隔时间
 */
export const RETRY_INTERVAL = 1500
/**
 * @retryErrorCode:  是否开启错误重试
 **/
export const RETRY_OPENRETRY = true
/**
 * @retryErrorCode:  是否携带token
 **/
export const carryToken = true
/**
 *  过滤掉哪些url不需要 token
 **/
export const filterRequestUrl: Array<string> = ['/login']
/**
 * @names 接口默认携带请求时间time字段
 * **/
export const axiosTimeName = '_t'
/**
 *  设置对应的请求参数中放入时间戳
 **/
export const axiosAddTime = [
  RequestEnum.GET,
  RequestEnum.DELETE,
  RequestEnum.HEAD,
  RequestEnum.OPTIONS,
]
/**
 * @names 自定义token字段
 * **/
export const axiosTokenName = 'X-Access-Token'
/**
 * @names 白色变量
 * **/
export const colorFFF = '#ffffff'
/**
 * @names 布局配置
 * **/
export const LayoutOptions = [
  {
    id: 1,
    name: '左侧菜单模式',
  },
  {
    id: 2,
    name: '顶部菜单混合模式',
  },
  {
    id: 3,
    name: '顶部菜单模式',
  },
  // {
  //   id: 4,
  //   name: '左侧菜单混合模式',
  // },
]
/**
 * @names 主题颜色
 * @Tips 不建议更改颜色
 * **/
export const themeColor = [
  colorFFF,
  '#151515',
  '#009688',
  '#5172DC',
  '#018ffb',
  '#409eff',
  '#e74c3c',
  '#24292e',
  '#394664',
  '#001529',
  '#383f45',
] as const
/**
 * @names 左侧菜单颜色
 * @Tips 不建议更改颜色
 * **/
export const siderColor = [
  colorFFF,
  '#151515',
  '#009688',
  '#5172DC',
  '#018ffb',
  '#409eff',
  '#e74c3c',
  '#24292e',
  '#394664',
  '#001529',
  '#383f45',
] as const
/**
 * @names 顶部菜单颜色
 * @Tips 不建议更改颜色
 * **/
export const headerColor = [
  '#018ffb',
  '#212121',
  '#009688',
  colorFFF,
  '#5172dc',
  '#191a23',
  '#304156',
  '#28333E',
  '#344058',
  '#383f45',
] as const
/**
 * @names 多语言
 * **/
export const LangOptions = [
  {
    label: '简体中文',
    key: Locale.ZH_CN,
  },
  {
    label: '中国台湾(繁体)',
    key: Locale.ZH_TW,
  },
  // {
  //   label: '香港',
  //   key: Locale.ZH_HK,
  // },
  {
    label: 'English',
    key: Locale.EN,
  },
  {
    label: '俄罗斯语',
    key: Locale.RU,
  },
]
/**
 * @names 控制折叠左侧菜单按钮位置
 * **/
export const MenuFold: Array<SelectMixedOption> = [
  {
    label: '不显示',
    value: 'none',
  },
  {
    label: '顶部',
    value: 'top',
  },
  {
    label: '底部',
    value: 'bottom',
  },
]
/**
 * @names 切换路由动态 暂不支持
 * **/
export const AnimationType = [
  {
    label: '动画1',
    value: '动画1',
  },
  {
    label: '动画2',
    value: '动画2',
  },
  {
    label: '动画3',
    value: '动画3',
  },
]
export enum TabsEmnu {
  refresh = '刷新加载',
  closeTab = '关闭标签页',
  closeLeft = '关闭左侧标签页',
  closeRight = '关闭右侧标签页',
  closeOther = '关闭其他标签页',
  closeAll = '关闭全部标签页',
}
