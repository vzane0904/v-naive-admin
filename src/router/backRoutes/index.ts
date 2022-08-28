import { oldbackpermissions } from '@/api'
import { routeStore } from '@/pinia/modules/routeStore'
import { createRoutes } from '../utils/createRoutes'
import { removeRoute } from '../utils/remove'
const modules = import.meta.globEager('./**/*.ts')
export const bacoRoutersMap = new Map()
export const getBackRoutes = async function () {
  try {
    let {
      data: { route, allAuth },
    } = await oldbackpermissions()
    removeRoute()
    const routeStoreValue = routeStore()
    routeStoreValue.$patch({
      originalData: route,
      auth: allAuth,
    })
    createRoutes()
  } catch (error) {
    console.error(`Back模式获取权限失败:`, error)
  }
}
export const backStaticRoutes = async function () {
  Object.keys(modules).forEach((item: string) => {
    Object.keys(modules[item].default).forEach((comKey: string) => {
      bacoRoutersMap.set(comKey, modules[item].default[comKey])
    })
  })
}
