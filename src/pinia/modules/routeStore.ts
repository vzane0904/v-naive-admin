import { baseHome } from '@/config'
import { removeRoute } from '@/router/utils/remove'
import { RouteType } from '@/type/route'
import { defineStore } from 'pinia'
import { TabsType } from '../type/user'
import { useProfileStore } from './user'

export const routeStore = defineStore({
  id: 'routeStore',
  state: () => ({
    originalData: [] as Array<RouteType>, //原数据
    routesName: [] as Array<string>, //原数据
    routesList: [], // back路由模式接口数据
    menuList: [], //菜单
    auth: [], //权限
    selectMenu: baseHome, //首页路径
    tabs: <Array<TabsType>>[
      {
        name: baseHome,
        path: baseHome,
        isClose: false,
        title: '首页',
      },
    ],
    tabsActive: baseHome,
    role: ['admin', 'int'],
  }),
  actions: {
    reset() {
      const user = useProfileStore()
      removeRoute()
      user.$reset()
      setTimeout(() => {
        this.$reset()
      }, 100)
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: [
          'originalData',
          'auth',
          // 'tabs',
          'role',
        ],
      },
    ],
  },
})
