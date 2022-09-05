import { onLoadGetPermission, permissionMode } from '@/config'
import { RoleEnum } from '@/enum/route'
import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { backStaticRoutes, getBackRoutes } from './backRoutes'
import { getMoveRoutes } from './moveRoutes'
import { roleStaticRoutes } from './roleRoutes'
import { staticRoutes } from './routes/basic'
import { afterEach } from './utils/afterEach'
import { beforeEach } from './utils/beforeEach'
import { createRoutes } from './utils/createRoutes'
export const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 }),
  strict: true,
})
export async function setRoute(app: App<Element>) {
  // @ts-ignore
  if (permissionMode === RoleEnum.ROLE) {
    roleStaticRoutes()
    // @ts-ignore
  } else if (permissionMode === RoleEnum.BACK) {
    backStaticRoutes()
  }
  createRoutes()
  app.use(router)
  if (onLoadGetPermission && permissionMode === RoleEnum.MOVE) {
    await getMoveRoutes()
    // @ts-ignore
  } else if (permissionMode === RoleEnum.BACK) {
    await backStaticRoutes()
    getBackRoutes()
  }
}
router.beforeEach(async (to, from, next) => beforeEach(to, from, next))
// 切换完成
router.afterEach(() => afterEach())
