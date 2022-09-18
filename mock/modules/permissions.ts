import { baseUrl, resultData } from '../config/index'
import Mock from 'mockjs'
import { uuid } from '@/utils/utils'
import { backAllAuth, backData } from '../config/data/backData'
import { moveAllAuth, moveData } from '../config/data/moveData'
export default [
  // Back
  {
    url: `${baseUrl}/users/back/permissions`,
    method: 'post',
    timeout: 2000,
    response: () =>
      resultData({
        route: backData,
        allAuth: backAllAuth,
      }),
  },
  // Move
  {
    url: `${baseUrl}/users/move/permissions`,
    method: 'post',
    timeout: 2000,
    response: () =>
      resultData({
        route: moveData,
        allAuth: moveAllAuth,
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
    url: `${baseUrl}/sys/login/userName`,
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
