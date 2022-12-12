import { movePermissions } from '@/api'
import { routeStore } from '@/pinia/modules/routeStore'
import { createRoutes } from '../utils/createRoutes'
import { removeRoute } from '../utils/remove'
const modules = import.meta.globEager('./**/*.ts')
const router404Components = () => import('@/layouts/error/router404.vue')
export const errSymbol = Symbol('router404Components')
export const moveRoutersMap = new Map()
moveRoutersMap.set(errSymbol, router404Components)
export const getMoveRoutes = async function () {
  try {
    const { route, allAuth } = await movePermissions()
    removeRoute()
    const routeStoreValue = routeStore()
    routeStoreValue.$patch({
      originalData: route,
      auth: allAuth,
    })
    createRoutes()
  } catch (error) {
    console.error(`Move模式获取权限失败:`, error)
  }
}
export const moveStaticRoutes = async function () {
  Object.keys(modules).forEach((item: string) => {
    Object.keys(modules[item].default).forEach((comKey: string) => {
      moveRoutersMap.set(comKey, modules[item].default[comKey])
    })
  })
}
