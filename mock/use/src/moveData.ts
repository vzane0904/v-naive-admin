export const moveData = [
  // 首页
  {
    path: '/home',
    name: 'home',
    component: 'homeComponent',
    meta: {
      icon: 'zhuye3',
      title: 'move首页',
      query: {},
      params: {},
      orderNo: 1,
    },
  },
  // 权限管理
  {
    path: '/permission',
    name: 'permission',
    component: 'view',
    meta: {
      icon: 'zhuye3',
      title: 'move权限管理',
      orderNo: 2,
    },
    children: [
      {
        path: '/permission/web',
        name: 'web',
        component: 'permissionWebComponent',
        meta: {
          icon: 'jiaoseguanli1',
          title: '前端权限',
        },
      },
      {
        path: '/permission/back',
        name: 'permissionBack',
        component: 'permissionBackComponent',
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
      title: 'move功能',
      orderNo: 3,
    },
    children: [
      {
        path: '/function/http',
        name: 'http',
        component: 'functionHttpComponent',
        meta: {
          icon: 'jiaoseguanli1',
          title: 'Http',
        },
      },
      {
        path: '/function/session-timeout',
        name: 'sessionTimeout',
        component: 'functionSessionTimeoutComponent',
        meta: {
          icon: '_caidanguanli',
          title: '登录过期',
        },
      },
      {
        path: '/function/copy',
        name: 'copy',
        component: 'functionCopyComponent',
        meta: {
          icon: '_caidanguanli',
          title: '剪切板',
        },
      },
      {
        path: '/function/msg',
        name: 'msg',
        component: 'functionMsgComponent',
        meta: {
          icon: '_caidanguanli',
          title: '消息提示',
        },
      },
      {
        path: '/function/full-screen',
        name: 'fullScreen',
        component: 'functionFullScreenComponent',
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
      orderNo: 5,
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
          params: {
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
          params: {
            path: 'https://www.naiveui.com/zh-CN/light',
          },
        },
      },
      {
        path: 'http://doc.mmxxn.cn/',
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
      title: 'move多级菜单',
      orderNo: 4,
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
                component: 'levelMenu1Menu1Component',
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
        component: 'levelMenu2Component',
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
      title: 'move系统管理',
      orderNo: 6,
    },
    children: [
      {
        path: '/system/account',
        name: 'account',
        component: 'systemAccountComponent',
        meta: {
          icon: 'jiaoseguanli1',
          title: '账号管理',
        },
      },
      {
        path: '/system/role',
        name: 'role',
        component: 'systemRoleComponent',
        meta: {
          icon: 'jiaoseguanli1',
          title: '角色管理',
        },
      },
      {
        path: '/system/menu',
        name: 'menu',
        component: 'systemMenuComponent',
        meta: {
          icon: 'jiaoseguanli1',
          title: '菜单管理',
        },
      },
      {
        path: '/system/dept',
        name: 'dept',
        component: 'systemDeptComponent',
        meta: {
          icon: 'jiaoseguanli1',
          title: '部门管理',
        },
      },
      {
        path: '/system/changePassword',
        name: 'changePassword',
        component: 'systemChangePasswordComponent',
        meta: {
          icon: 'jiaoseguanli1',
          title: '修改密码',
        },
      },
    ],
  },
  // 错误页
  {
    path: '/errPage',
    name: 'errPage',
    component: 'view',
    meta: {
      icon: 'zhuye3',
      title: '错误页',
      orderNo: 7,
    },
    children: [
      {
        path: '/errPage/403',
        name: '403',
        component: '403',
        meta: {
          icon: 'jiaoseguanli1',
          title: '403',
          orderNo: 1,
        },
      },
      {
        path: '/errPage/404',
        name: '404',
        component: '404',
        meta: {
          icon: 'jiaoseguanli1',
          title: '404',
          orderNo: 2,
        },
      },
      {
        path: '/errPage/500',
        name: '500',
        component: '500',
        meta: {
          icon: 'jiaoseguanli1',
          title: '500',
          orderNo: 3,
        },
      },
    ],
  },
  // 关于
  {
    path: '/about',
    name: 'about',
    component: 'aboutComponent',
    meta: {
      icon: 'zhuye3',
      title: 'move关于',
    },
  },
]
export const moveAllAuth = [{ name: '按钮权限', id: 1 }]
