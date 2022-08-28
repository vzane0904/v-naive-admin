import { baseUrl, resultData } from '../index'
import Mock from 'mockjs'
import { uuid } from '@/utils/utils'
export default [
  // move
  {
    url: `${baseUrl}/users/permissions`,
    method: 'post',
    timeout: 2000,
    response: () =>
      resultData({
        route: [
          {
            path: '/movefid',
            name: 'movefid',
            component: 'home',
            meta: {
              icon: 'zhuye3',
              title: 'move关于',
              query: { name: 'movefid query', age: 20 },
              params: { name: 'params query', age: 20 },
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
          {
            path: '/movesystem',
            name: 'movesystem',
            component: 'view',
            meta: {
              icon: 'setting1',
              title: 'move系统管理',
            },
            children: [
              {
                path: '/movesystem/moverole',
                name: 'role',
                component: 'system/role',
                meta: {
                  icon: 'jiaoseguanli1',
                  title: 'move角色管理',
                },
              },
              {
                path: '/movesystem/movemenu',
                name: 'movemenu',
                component: 'system/menu',
                meta: {
                  icon: '_caidanguanli',
                  title: 'move菜单管理',
                  requiresAuth: true,
                },
              },
            ],
          },
          {
            path: '/movesystem1',
            name: 'movesystem1',
            component: 'view',
            meta: {
              icon: 'setting1',
              title: 'move系统管理1',
            },
            children: [
              {
                path: '/movesystem/moverole1',
                name: 'role',
                component: 'system/role',
                meta: {
                  icon: 'jiaoseguanli1',
                  title: 'move角色管理1',
                },
              },
              {
                path: '/movesystem/movemenu1',
                name: 'movemenu1',
                component: 'system/menu',
                meta: {
                  icon: '_caidanguanli',
                  title: 'move菜单管理1',
                  requiresAuth: true,
                },
              },
            ],
          },
        ],
        allAuth: [{ name: '按钮权限', id: 1 }],
      }),
  },
  // 切换新权限
  {
    url: `${baseUrl}/users/newpermissions`,
    method: 'post',
    timeout: 2000,
    response: () =>
      resultData({
        route: [
          {
            parentId: 0,
            id: '1-1',
            path: '/111111111',
            redirect: '',
            component: 'system/homePage/index',
            meta: {
              icon: '1111',
              title: '1111111111111',
              keepAlive: false,
              hideMenu: false,
            },
          },
        ],
        allAuth: [
          { name: '按钮权限', id: 1 },
          { name: '按钮权限2', id: 2 },
        ],
      }),
  },
  // back
  {
    url: `${baseUrl}/users/oldbackpermissions`,
    method: 'post',
    timeout: 2000,
    response: () =>
      resultData({
        route: [
          {
            path: '/backhome',
            name: 'backhome',
            component: 'homePageComponent',
            meta: {
              icon: 'zhuye3',
              title: 'Back首页',
            },
          },
          {
            path: 'https://www.baidu.com/',
            name: 'baidu',
            component: 'iframe',
            meta: {
              icon: 'zhuye3',
              title: '外部链接',
            },
          },
          {
            path: '/InsideIframe',
            name: 'Inside',
            component: 'iframe',
            meta: {
              icon: 'zhuye3',
              title: '内部链接',
            },
          },
          {
            path: '/backhome1',
            name: 'backhome1',
            component: 'homePageComponent11',
            meta: {
              icon: 'zhuye3',
              title: 'Back首页1',
            },
          },
          {
            path: '/backfid',
            name: 'backfid',
            component: 'fldComponent',
            meta: {
              icon: 'zhuye3',
              title: 'Back关于',
            },
          },
          {
            path: '/backsystem',
            name: 'backsystem',
            component: 'view',
            meta: {
              icon: 'setting1',
              title: 'Back系统管理',
            },
            children: [
              {
                path: '/backsystem/backrole',
                name: 'backrole',
                component: 'roleComponent',
                meta: {
                  icon: 'jiaoseguanli1',
                  title: 'Back角色管理',
                },
              },
              {
                path: '/backsystem/backmenu',
                name: 'backmenu',
                component: 'menuComponent',
                meta: {
                  icon: '_caidanguanli',
                  title: 'Back菜单管理',
                  requiresAuth: true,
                },
              },
            ],
          },
        ],
        allAuth: [{ name: '按钮权限', id: 1 }],
      }),
  },
  // ????
  {
    url: `${baseUrl}/users/newbackpermissions`,
    method: 'post',
    timeout: 2000,
    response: () =>
      resultData({
        route: [
          {
            parentId: 0,
            id: '1-1',
            path: '/newBack',
            redirect: '',
            component: 'newBack',
            meta: {
              icon: 'newBack',
              title: 'newBack',
              keepAlive: false,
              hideMenu: false,
            },
          },
        ],
        allAuth: [{ name: '按钮权限', id: 1 }],
      }),
  },
  // 图片验证码
  {
    url: `${baseUrl}/get_pic_validate_code`,
    method: 'get',
    timeout: 2000,
    response: () =>
      resultData({
        // img: Random.image('130x34', Mock.mock({ regexp: /\w{4}/ }).regexp),
        // imga: Mock.Random.dataImage('130x34', 'xxxxx'),
        img: Mock.Random.image(
          '130x34',
          Mock.Random.color(), //背景颜色
          Mock.Random.color(), //字体颜色
          Mock.mock({ regexp: /\w{4}/ }).regexp,
        ),
      }),
  },
  {
    url: `${baseUrl}/sys/sms`,
    method: 'get',
    timeout: 4000,
    response: () =>
      resultData(
        Mock.mock({
          'code|1000-9999': 1000,
        }),
      ),
  },
  // 用户名登录
  {
    url: `${baseUrl}/sys/login/uasrName`,
    method: 'post',
    timeout: 200,
    response: () =>
      resultData(
        { token: uuid(), useName: '超级管理员' },
        200,
        true,
        '用户名登录成功',
      ),
  },
  // 手机号登录
  {
    url: `${baseUrl}/sys/login/phone`,
    method: 'post',
    timeout: 200,
    response: () => resultData({}, 200, true, '手机号登录成功'),
  },
  // 注册
  {
    url: `${baseUrl}/sys/register`,
    method: 'post',
    timeout: 200,
    response: () => resultData({}, 200, true, '注册成功'),
  },
  // 找回密码
  {
    url: `${baseUrl}/sys/retrievePass`,
    method: 'post',
    timeout: 200,
    response: () => resultData({}, 200, true, '重置密码成功'),
  },
]
