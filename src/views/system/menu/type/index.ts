export interface IMenuList {
  state: number
  createDate: string
  updateDate: string
  deleteDate: string
  id: number
  menuIdList: string
  label: string
  name: string
  remark: string
  roleName: Array<string | number>
}
// query: {
//     [key: string]: any
//   }
//   params: {
//     [key: string]: any
//   }
//   createDate: string
//   updateDate: string
//   deleteDate: string
//   id: number
//   parentId: number
//   name: string
//   path: string
//   redirect: string
//   disabled: boolean
//   component: string
//   icon: string
//   title: string
//   keepAlive: boolean
//   hideMenu: boolean
//   currentActiveMenu?: any
//   hideTab: boolean
//   iframeSrc?: any
//   orderNo: number
//   children?: IMenuList[]
