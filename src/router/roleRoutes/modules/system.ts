import { RouteType } from '@/type/route'

const route: Array<RouteType> = [
  {
    path: '/system',
    name: 'system',
    component: 'view',
    meta: {
      icon: 'setting1',
      title: '系统管理',
      roles: ['*'],
    },
    children: [
      {
        path: '/system/role',
        name: 'role',
        component: () => import('@/views/system/role.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: '角色管理',
          roles: ['admin', '*'],
        },
      },
      {
        path: '/system/menu',
        name: 'menu',
        component: () => import('@/views/system/menu.vue'),
        meta: {
          icon: '_caidanguanli',
          title: '菜单管理',
          roles: ['tenantAdmin'],
          requiresAuth: true,
        },
      },
    ],
  },
]
export default route
