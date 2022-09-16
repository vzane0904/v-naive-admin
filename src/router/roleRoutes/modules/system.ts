import { RouteType } from '@/type/route'

const route: Array<RouteType> = [
  // 权限管理
  {
    path: '/permission',
    name: 'permission',
    component: 'view',
    meta: {
      icon: 'zhuye3',
      title: '权限管理',
      roles: ['admin'],
    },
    children: [
      {
        path: '/permission/web',
        name: 'web',
        component: () => import('@/views/permission/web/index.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: '前端权限',
          roles: ['admin'],
          orderNo: 1,
        },
      },
      {
        path: '/permission/back',
        name: 'back',
        component: () => import('@/views/permission/back/index.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: '后台权限',
          roles: ['admin'],
          orderNo: 2,
        },
      },
    ],
  },
  // 功能
  {
    path: '/function',
    name: 'function',
    component: 'view',
    meta: {
      icon: 'setting1',
      title: '功能',
      roles: ['admin'],
    },
    children: [
      {
        path: '/function/http',
        name: 'http',
        component: () => import('@/views/function/http/index.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: 'Http',
          roles: ['admin'],
        },
      },
      {
        path: '/function/session-timeout',
        name: 'sessionTimeout',
        component: () => import('@/views/function/sessionTimeout/index.vue'),
        meta: {
          icon: '_caidanguanli',
          title: '登录过期',
          roles: ['admin'],
        },
      },
      {
        path: '/function/copy',
        name: 'copy',
        component: () => import('@/views/function/copy/index.vue'),
        meta: {
          icon: '_caidanguanli',
          title: '剪切板',
          roles: ['admin'],
        },
      },
      {
        path: '/function/msg',
        name: 'msg',
        component: () => import('@/views/function/msg/index.vue'),
        meta: {
          icon: '_caidanguanli',
          title: '消息提示',
          roles: ['admin'],
        },
      },
      {
        path: '/function/full-screen',
        name: 'fullScreen',
        component: () => import('@/views/function/fullScreen/index.vue'),
        meta: {
          icon: '_caidanguanli',
          title: '全屏',
          roles: ['admin'],
        },
      },
    ],
  },
  // 外部页面
  {
    path: '/frame',
    name: 'frame',
    component: 'view',
    meta: {
      icon: 'setting1',
      title: '外部页面',
      roles: ['admin'],
    },
    children: [
      {
        path: '/frame/doc',
        name: 'iframe',
        component: 'iframe',
        meta: {
          icon: 'jiaoseguanli1',
          title: '项目文档(内嵌)',
          roles: ['admin'],
          query: {
            path: 'http://doc.mmxxn.cn/',
          },
        },
      },
      {
        path: '/frame/naive',
        name: 'iframe',
        component: 'iframe',
        meta: {
          icon: 'jiaoseguanli1',
          title: 'Naive UI文档(内嵌)',
          query: {
            path: 'https://www.naiveui.com/zh-CN/light',
          },
        },
      },
      {
        path: 'https://doc.mmxxn.cn/',
        name: 'docMmxxn',
        component: 'iframe',
        meta: {
          icon: 'zhuye3',
          title: '项目文档(外链)',
          roles: ['admin'],
        },
      },
    ],
  },
  // 多级菜单
  {
    path: '/level',
    name: 'level',
    component: 'view',
    meta: {
      icon: 'setting1',
      title: '多级菜单',
    },
    children: [
      {
        path: '/level/menu1',
        name: 'menu1',
        component: 'routerView',
        meta: {
          icon: 'jiaoseguanli1',
          title: 'Menu1',
        },
        children: [
          {
            path: '/level/menu1/menu1',
            name: 'menu1Menu1',
            component: 'routerView',
            meta: {
              icon: 'jiaoseguanli1',
              title: 'Menu1-1',
            },
            children: [
              {
                path: '/level/menu1/menu1/menu1',
                name: 'menu1Menu1Menu1',
                component: () => import('@/views/level/menu1/menu1/index.vue'),
                meta: {
                  icon: 'jiaoseguanli1',
                  title: 'Menu1-1-1',
                },
              },
            ],
          },
        ],
      },
      {
        path: '/level/menu2',
        name: 'menu2',
        component: () => import('@/views/level/menu2.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: 'Menu2',
        },
      },
    ],
  },
  // 系统管理
  {
    path: '/system',
    name: 'system',
    component: 'view',
    meta: {
      icon: 'setting1',
      title: '系统管理',
      roles: ['admin'],
    },
    children: [
      {
        path: '/system/account',
        name: 'account',
        component: () => import('@/views/system/account/index.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: '账号管理',
          roles: ['admin'],
        },
      },
      {
        path: '/system/role',
        name: 'role',
        component: () => import('@/views/system/role/index.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: '角色管理',
          roles: ['admin'],
        },
      },
      {
        path: '/system/menu',
        name: 'menu',
        component: () => import('@/views/system/menu/index.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: '菜单管理',
          roles: ['admin'],
        },
      },
      {
        path: '/system/dept',
        name: 'dept',
        component: () => import('@/views/system/dept/index.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: '部门管理',
          roles: ['admin'],
        },
      },
      {
        path: '/system/changePassword',
        name: 'changePassword',
        component: () => import('@/views/system/changePassword/index.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: '修改密码',
          roles: ['admin'],
        },
      },
    ],
  },
  // 系统管理
  {
    path: '/errPage',
    name: 'errPage',
    component: 'view',
    meta: {
      icon: 'setting1',
      title: '错误页',
      roles: ['admin'],
    },
    children: [
      {
        path: '/errPage/403',
        name: '403',
        component: () => import('@/views/errPage/403/index.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: '403',
          roles: ['admin'],
        },
      },
      {
        path: '/errPage/404',
        name: 'account',
        component: () => import('@/views/errPage/404/index.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: '404',
          roles: ['admin'],
        },
      },
      {
        path: '/errPage/500',
        name: '500',
        component: () => import('@/views/errPage/500/index.vue'),
        meta: {
          icon: 'jiaoseguanli1',
          title: '500',
          roles: ['admin'],
        },
      },
    ],
  },
  // 关于
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/system/about/index.vue'),
    meta: {
      icon: 'zhuye3',
      title: '关于',
      roles: ['admin'],
    },
  },
]
export default route
