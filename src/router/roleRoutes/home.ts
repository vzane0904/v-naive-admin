import { RouteType } from '@/type/route'
import { MenuIcon } from '../../../mock/config/icon'

const route: Array<RouteType> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {
      icon: MenuIcon.home,
      title: '首页',
      roles: ['admin'],
    },
  },
]
export default route
