import { RouteType } from '@/type/route'
const route: Array<RouteType> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {
      icon: 'zhuye3',
      title: '首页',
      roles: ['admin'],
    },
  },
]
export default route
