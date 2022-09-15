import { permissionMode } from '@/config'
import { RoleEnum } from '@/enum/route'
import { routeStore } from '@/pinia/modules/routeStore'
import { Component } from '@/type/component'
import { RouteType } from '@/type/route'
import { DeepCopy } from '@/utils'
import { RouteLocationNormalized } from 'vue-router'
import { moveRoutersMap } from '../moveRoutes'

export const RenderComponent = (componentName: string): Component => {
  if (componentName === 'view') {
    return () => import(`@/layouts/default/view.vue`)
  } else if (componentName === 'iframe') {
    return () => import(`@/layouts/iframe/index.vue`)
  } else if (componentName === 'routerView') {
    return () => import(`@/layouts/routerView/index.vue`)
    // @ts-ignore
  } else if (permissionMode === RoleEnum.MOVE) {
    const item = moveRoutersMap.get(componentName)
    if (item) {
      return moveRoutersMap.get(componentName)
    }
    console.warn(`找不到${componentName}文件`)
  } else if (permissionMode === RoleEnum.BACK) {
    return () => eval(`import("../../views/${componentName}.vue")`) // 后台返回数据
  }
  // @ts-ignore
  if (permissionMode === RoleEnum.ROLE) {
    return componentName
  }
}
export const transformRoute = (
  routeList: Array<RouteType>,
): Array<RouteType> => {
  const store = routeStore()

  return routeList
    .map((item: RouteType) => {
      // @ts-ignore
      if (permissionMode === RoleEnum.ROLE) {
        let next = false
        if (!item.meta.roles) {
          return
        }
        for (let i = 0; i < item.meta.roles.length; i++) {
          if (
            item.meta.roles[i] === '*' ||
            store.role.includes(item.meta.roles[i])
          ) {
            next = true
            break
          }
        }
        if (!next) {
          return
        }
      }
      const info = DeepCopy(item)
      info.name = item.path
      info.component = RenderComponent(item.component)
      // 路由配置表配置参数默认使用props传递
      // info.props = () => ({
      //   routeQuery: item.meta.query || {},
      // })
      if (item.children) {
        info.children = transformRoute(item.children)
      }
      return info
    })
    .filter((i) => i)
}
export const addTabs = (to: RouteLocationNormalized) => {
  const store = routeStore()
  const { name, path } = to
  if (
    store.tabs.filter((i) => i.name === name && i.path === path).length === 0
  ) {
    //不存在
    store.tabs.push({
      name: to.name as string,
      path: to.path,
      isClose: true,
      title: to.meta.title as string,
    })
  }
}
