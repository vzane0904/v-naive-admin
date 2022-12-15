import { RouteMeta } from 'vue-router'

export interface IMenuList {
  parentId: string | number
  id?: number
  name: string
  orderNo: number
  state: number
  icon: string
  path: string
  redirect: string
  component: string | null
  iframeSrc: string
  title: string
  keepAlive: number
  hideMenu: boolean
  hideTab: boolean
  type: number
  meta?: RouteMeta
}
