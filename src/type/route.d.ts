import type { RouteRecordRaw, RouteMeta } from 'vue-router'
import { Expand } from '.'
import { Component } from './component'
interface Meta extends RouteMeta {
  icon?: any
  title: string
  keepAlive?: boolean
  hideMenu?: boolean
  roles?: Array<string>
  currentActiveMenu?: string // 当前激活的菜单。用于配置详情页时左侧激活的菜单路径
  hideTab?: boolean // 当前路由不再标签页显示
  carryParam?: boolean // 如果该路由会携带参数，且需要在tab页上面显示。则需要设置为true
  transitionName?: string // 指定该路由切换的动画名
  iframeSrc?: string
  requiresAuth?: boolean
}

export interface MenuType {
  name: string
  path: string
  redirect?: string
  paramPath?: string
  disabled?: boolean
  children?: MenuType[]
  orderNo?: number
  roles?: []
  meta: Meta
  component: Component | string
  components?: Component
}
export interface RouteTypeOf extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  path: string
  redirect?: string
  paramPath?: string
  children?: MenuType[]
  orderNo?: number
  roles?: []
  meta: Meta
  component: Component | string
  components?: Component
}
type RouteType = Expand<RouteTypeOf>

declare module 'vue-router' {
  interface RouteMeta {
    hidden?: boolean | string | number
  }
}
