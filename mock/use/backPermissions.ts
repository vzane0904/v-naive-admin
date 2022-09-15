import { baseUrl, resultData } from '../config/index'
export default [
  {
    url: `${baseUrl}/back/users/permissions`,
    method: 'get',
    timeout: 3000,
    response: () =>
      resultData({
        route: [],
        allAuth: [{ name: '按钮权限', id: 1 }],
      }),
  },
  {
    url: `${baseUrl}/back/users/permissions`,
    method: 'post',
    timeout: 4000,
    response: () =>
      resultData({
        route: [
          {
            parentId: 0,
            id: '1-1',
            path: '/home',
            redirect: '',
            component: 'homePageComponent',
            meta: {
              icon: 'zhuye3',
              title: '主页',
              keepAlive: false,
              hideMenu: false,
            },
          },
          {
            parentId: 1,
            id: '1-2',
            path: '/system',
            redirect: '/system/menu',
            component: 'view',
            meta: {
              icon: 'zhuye3',
              title: '系统设置',
              keepAlive: false,
              hideMenu: false,
            },
            children: [
              {
                parentId: '1-2',
                id: '1-2-1',
                path: '/system/menu',
                component: 'homePageComponent',
                meta: {
                  icon: 'zhuye3',
                  title: '菜单设置',
                  keepAlive: false,
                  hideMenu: false,
                },
              },
              {
                parentId: '1-2',
                id: '1-2-2',
                path: '/system/menu1',
                component: 'roleComponent',
                meta: {
                  icon: 'zhuye3',
                  title: '用户管理',
                  keepAlive: false,
                  hideMenu: false,
                },
              },
            ],
          },
          {
            parentId: '1-222',
            id: '1-221',
            path: '/list/:id',
            component: 'listComponent',
            meta: {
              icon: 'zhuye3',
              title: '列表',
              keepAlive: false,
              hideMenu: true,
            },
          },
        ],
        allAuth: [{ name: '按钮权限', id: 1 }],
      }),
  },
  {
    url: '/delete',
    timeout: 2000,
    methods: 'delete',
    response: () => {
      'delete'
    },
  },
  {
    url: '/patch',
    timeout: 2000,
    methods: 'patch',
    response: () => {
      'patch'
    },
  },
  {
    url: '/put',
    methods: 'put',
    timeout: 2000,
    response: () => {
      'put'
    },
  },
  {
    url: '/get',
    timeout: 2000,
    methods: 'get',
    response: () => {
      'get'
    },
  },
  {
    url: '/post',
    timeout: 2000,
    methods: 'post',
    response: () => {
      'post'
    },
  },
]
