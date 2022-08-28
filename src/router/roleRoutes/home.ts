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
  {
    path: '/fid',
    name: 'fid',
    component: () => import('@/views/home.vue'),
    meta: {
      icon: 'zhuye3',
      title: '关于',
      roles: ['admin'],
    },
  },
  {
    path: 'https://www.baidu.com/',
    name: 'baidu',
    component: 'iframe',
    meta: {
      icon: 'zhuye3',
      title: 'move外部链接',
    },
  },
  {
    path: '/InsideIframe',
    name: 'Inside',
    component: 'iframe',
    meta: {
      icon: 'zhuye3',
      title: 'move内部链接',
    },
  },
]
export default route
