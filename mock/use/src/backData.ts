export const backData = [
  // 首页
  {
    path: '/home',
    name: 'home',
    component: 'home',
    meta: {
      icon: 'zhuye3',
      title: '首页',
      query: {},
      params: {},
    },
  },
  // 权限管理
  {
    path: '/permission',
    name: 'permission',
    component: 'view',
    meta: {
      icon: 'zhuye3',
      title: '权限管理',
    },
    children: [
      {
        path: '/permission/web',
        name: 'web',
        component: '/permission/web/index',
        meta: {
          icon: 'jiaoseguanli1',
          title: '前端权限',
        },
      },
      {
        path: '/permission/back',
        name: 'back',
        component: '/permission/back/index',
        meta: {
          icon: 'jiaoseguanli1',
          title: '后台权限',
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
    },
    children: [
      {
        path: '/function/http',
        name: 'http',
        component: 'function/http/index',
        meta: {
          icon: 'jiaoseguanli1',
          title: 'Http',
        },
      },
      {
        path: '/function/session-timeout',
        name: 'sessionTimeout',
        component: 'function/sessionTimeout/index',
        meta: {
          icon: '_caidanguanli',
          title: '登录过期',
        },
      },
      {
        path: '/function/copy',
        name: 'copy',
        component: 'function/copy/index',
        meta: {
          icon: '_caidanguanli',
          title: '剪切板',
        },
      },
      {
        path: '/function/msg',
        name: 'msg',
        component: 'function/msg/index',
        meta: {
          icon: '_caidanguanli',
          title: '消息提示',
        },
      },
      {
        path: '/function/full-screen',
        name: 'fullScreen',
        component: 'function/fullScreen/index',
        meta: {
          icon: '_caidanguanli',
          title: '全屏',
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
    },
    children: [
      {
        path: '/frame/doc',
        name: 'iframe',
        component: 'iframe',
        meta: {
          icon: 'jiaoseguanli1',
          title: '项目文档(内嵌)',
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
                component: 'level/menu1/menu1/index',
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
        component: 'level/menu2',
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
    },
    children: [
      {
        path: '/system/account',
        name: 'account',
        component: 'system/account/index',
        meta: {
          icon: 'jiaoseguanli1',
          title: '账号管理',
        },
      },
      {
        path: '/system/role',
        name: 'role',
        component: 'system/role/index',
        meta: {
          icon: 'jiaoseguanli1',
          title: '角色管理',
        },
      },
      {
        path: '/system/menu',
        name: 'menu',
        component: 'system/menu/index',
        meta: {
          icon: 'jiaoseguanli1',
          title: '菜单管理',
        },
      },
      {
        path: '/system/dept',
        name: 'dept',
        component: 'system/dept/index',
        meta: {
          icon: 'jiaoseguanli1',
          title: '部门管理',
        },
      },
      {
        path: '/system/changePassword',
        name: 'changePassword',
        component: 'system/changePassword/index',
        meta: {
          icon: 'jiaoseguanli1',
          title: '修改密码',
        },
      },
    ],
  },
  // 关于
  {
    path: '/about',
    name: 'about',
    component: 'system/about/index',
    meta: {
      icon: 'zhuye3',
      title: '关于',
    },
  },
]
export const backAllAuth = [{ name: '按钮权限', id: 1 }]
