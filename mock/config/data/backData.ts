import { MenuIcon } from '../icon'

export const backData = [
  // 首页
  {
    path: '/home',
    name: 'home',
    component: 'home',
    meta: {
      icon: MenuIcon.home,
      title: '首页',
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
      icon: MenuIcon.permission,
      title: '权限管理',
      orderNo: 2,
    },
    children: [
      {
        path: '/permission/web',
        name: 'web',
        component: '/permission/web/index',
        meta: {
          icon: MenuIcon.permissionWeb,
          title: '前端权限',
          orderNo: 2,
        },
      },
      {
        path: '/permission/back',
        name: 'back',
        component: '/permission/back/index',
        meta: {
          icon: MenuIcon.permissionBack,
          title: '后台权限',
          orderNo: 1,
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
      icon: MenuIcon.function,
      title: '功能',
      orderNo: 3,
    },
    children: [
      {
        path: '/function/http',
        name: 'http',
        component: 'function/http/index',
        meta: {
          icon: MenuIcon.functionHttp,
          title: 'Http',
        },
      },
      {
        path: '/function/session-timeout',
        name: 'sessionTimeout',
        component: 'function/sessionTimeout/index',
        meta: {
          icon: MenuIcon.functionSessionTimeout,
          title: '登录过期',
        },
      },
      {
        path: '/function/copy',
        name: 'copy',
        component: 'function/copy/index',
        meta: {
          icon: MenuIcon.functionCopy,
          title: '剪切板',
        },
      },
      {
        path: '/function/msg',
        name: 'msg',
        component: 'function/msg/index',
        meta: {
          icon: MenuIcon.functionMsg,
          title: '消息提示',
        },
      },
      {
        path: '/function/full-screen',
        name: 'fullScreen',
        component: 'function/fullScreen/index',
        meta: {
          icon: MenuIcon.functionFullScreen,
          title: '全屏',
        },
      },
    ],
  },
  // 外部页面
  {
    path: '/iframe',
    name: 'iframe',
    component: 'view',
    meta: {
      icon: MenuIcon.iframe,
      title: '外部页面',
      orderNo: 4,
    },
    children: [
      {
        path: '/frame/doc',
        name: 'doc',
        component: 'iframe',
        meta: {
          icon: MenuIcon.iframeDoc,
          title: '项目文档(内嵌)',
          query: {
            path: 'http://doc.mmxxn.cn/',
          },
        },
      },
      {
        path: '/frame/naive',
        name: 'naive',
        component: 'iframe',
        meta: {
          icon: MenuIcon.iframeNaive,
          title: 'Naive UI文档(内嵌)',
          query: {
            path: 'https://www.naiveui.com/zh-CN/light',
          },
        },
      },
      {
        path: 'http://doc.mmxxn.cn/',
        name: 'docMmxxn',
        component: 'iframe',
        meta: {
          icon: MenuIcon.iframeNaive,
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
      icon: MenuIcon.level,
      title: '多级菜单',
      orderNo: 5,
    },
    children: [
      {
        path: '/level/menu1',
        name: 'menu1',
        component: 'routerView',
        meta: {
          icon: MenuIcon.levelMenu1,
          title: 'Menu1',
        },
        children: [
          {
            path: '/level/menu1/menu1',
            name: 'menu1Menu1',
            component: 'routerView',
            meta: {
              icon: MenuIcon.levelMenu1,
              title: 'Menu1-1',
            },
            children: [
              {
                path: '/level/menu1/menu1/menu1',
                name: 'menu1Menu1Menu1',
                component: 'level/menu1/menu1/index',
                meta: {
                  icon: MenuIcon.levelMenu1,
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
          icon: MenuIcon.levelMenu2,
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
      icon: MenuIcon.system,
      title: '系统管理',
      orderNo: 6,
    },
    children: [
      {
        path: '/system/account',
        name: 'account',
        component: 'system/user/index',
        meta: {
          icon: MenuIcon.systemAccount,
          title: '账号管理',
        },
      },
      {
        path: '/system/role',
        name: 'role',
        component: 'system/role/index',
        meta: {
          icon: MenuIcon.systemRole,
          title: '角色管理',
        },
      },
      {
        path: '/system/menu',
        name: 'menu',
        component: 'system/menu/index',
        meta: {
          icon: MenuIcon.systemMenu,
          title: '菜单管理',
        },
      },
      {
        path: '/system/dept',
        name: 'dept',
        component: 'system/dept/index',
        meta: {
          icon: MenuIcon.systemDept,
          title: '部门管理',
        },
      },
      {
        path: '/system/changePassword',
        name: 'changePassword',
        component: 'system/changePassword/index',
        meta: {
          icon: MenuIcon.systemChangePassword,
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
      icon: MenuIcon.errPage,
      title: '错误页',
      orderNo: 7,
    },
    children: [
      {
        path: '/errPage/403',
        name: '403',
        component: '/errPage/403/index',
        meta: {
          icon: MenuIcon.errPage403,
          title: '403',
          orderNo: 1,
        },
      },
      {
        path: '/errPage/404',
        name: '404',
        component: '/errPage/404/index',
        meta: {
          icon: MenuIcon.errPage404,
          title: '404',
          orderNo: 2,
        },
      },
      {
        path: '/errPage/500',
        name: '500',
        component: '/errPage/500/index',
        meta: {
          icon: MenuIcon.errPage500,
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
    component: 'system/about/index',
    meta: {
      icon: MenuIcon.about,
      title: '关于',
    },
  },
]
export const backAllAuth = [{ name: '按钮权限', id: 1 }]
