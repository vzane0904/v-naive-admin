export interface IMenuList {
  parentId: string | number
  id?: number
  name: string
  orderNo: number
  state: number
  icon: string
  path: string
  redirect: string
  query: any
  params: any
  component: string
  title: string
  keepAlive: number
  hideMenu: boolean
  hideTab: boolean
  type: number
}
