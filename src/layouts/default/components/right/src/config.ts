import { useGo, useCustomizeRouter } from '@/hooks/router'
import { routeStore } from '@/pinia/modules/routeStore'
import { useProfileStore } from '@/pinia/modules/user'
import { DropdownOption } from 'naive-ui'

export const userOptions = [
  {
    label: '切换租户',
    key: '切换租户',
    children: [
      {
        label: '租户A',
        key: '租户A',
        onclick: () => {
          console.log(1)
        },
      },
      {
        label: '租户B',
        key: '租户B',
      },
    ],
  },
  {
    label: '修改密码',
    key: '修改密码',
    fn: () => {
      console.log(1212)
    },
  },
  {
    label: '个人中心',
    key: '个人中心',
  },
  {
    label: '退出登录',
    key: '退出登录',
    fn: (key: string | number, option: DropdownOption) => {
      console.log(key, option)
      const profileStore = useProfileStore()
      const router = routeStore()
      const go = useGo()
      const routerCurrent = useCustomizeRouter()
      for (const item of unref(router.routesName)) {
        routerCurrent.removeRoute(item)
      }
      profileStore.$reset()
      router.$reset()
      go('/login')
    },
  },
]
