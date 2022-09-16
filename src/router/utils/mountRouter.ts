import { onLoadGetPermission, permissionMode } from '@/config'
import { RoleEnum } from '@/enum/route'
import { getBackRoutes } from '../backRoutes'
import { getMoveRoutes, moveStaticRoutes } from '../moveRoutes'
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
  } else if (permissionMode === RoleEnum.MOVE) {
    moveStaticRoutes()
  }
  createRoutes()
}
/**
 @mountNewData 获取新数据进行路由挂载
 @returns undefined
**/
export const mountNewData = async () => {
  return new Promise(async (resolve) => {
    // @ts-ignore
    if (onLoadGetPermission && permissionMode === RoleEnum.MOVE) {
      await moveStaticRoutes()
      await getMoveRoutes()
      resolve(true)
      // @ts-ignore
    } else if (permissionMode === RoleEnum.BACK) {
      await getBackRoutes()
      resolve(true)
      // @ts-ignore
    } else if (permissionMode === RoleEnum.ROLE) {
      await roleStaticRoutes()
      await createRoutes()
      resolve(true)
    }
  })
}
