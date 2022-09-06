import { onLoadGetPermission, permissionMode } from '@/config'
import { RoleEnum } from '@/enum/route'
import { backStaticRoutes, getBackRoutes } from '../backRoutes'
import { getMoveRoutes } from '../moveRoutes'
import { roleStaticRoutes } from '../roleRoutes'
import { createRoutes } from './createRoutes'
/**
 @mountRouter 获取旧数据进行路由挂载
 @returns undefined
**/
export const mountRouter = () => {
  // @ts-ignore
  if (permissionMode === RoleEnum.ROLE) {
    roleStaticRoutes()
    // @ts-ignore
  } else if (permissionMode === RoleEnum.BACK) {
    backStaticRoutes()
  }
  createRoutes()
}
/**
 @mountNewData 获取新数据进行路由挂载
 @returns undefined
**/
export const mountNewData = async () => {
  if (onLoadGetPermission && permissionMode === RoleEnum.MOVE) {
    await getMoveRoutes()
    // @ts-ignore
  } else if (permissionMode === RoleEnum.BACK) {
    await backStaticRoutes()
    getBackRoutes()
  }
}
