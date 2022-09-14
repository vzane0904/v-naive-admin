import { http } from '@/http'
import { IUseNameLogin } from '@/views/login/src/type'
export const baseUrl = '/api'
export const permissions = () => http.post(`${baseUrl}/users/permissions`) //获取路由 菜单接口//users/permissions
export const newpermissions = () => http.post(`${baseUrl}/users/newpermissions`) //获取路由 菜单接口//users/permissions users/
export const oldbackpermissions = () =>
  http.post(`${baseUrl}/users/oldbackpermissions`) //获取路由 菜单接口//users/permissions users/oldbackpermissions
export const newbackpermissions = () =>
  http.post(`${baseUrl}/users/newbackpermissions`) //获取路由 菜单接口//users/permissions users/oldbackpermissions
//back 模式获取路由权限
export const backPermissions = () =>
  http.post(`${baseUrl}/back/users/permissions`, {})
// 获取图片验证码
export const getPicValidateCode = () =>
  http.get(`${baseUrl}/get_pic_validate_code`)
// 获取手机号验证码
export const getSms = () => http.get(`${baseUrl}/sys/sms`)
// 用户名登录
export const userNameLogin = (params: IUseNameLogin) =>
  http.post(`${baseUrl}/sys/login/uasrName`, params)
// 手机号登录
export const userPhoneLogin = (params: any) =>
  http.post(`${baseUrl}/sys/login/phone`, params)
// 注册
export const register = (params: any) =>
  http.post(`${baseUrl}/sys/register`, params)
// 找回密码
export const retrievePass = (params: any) =>
  http.post(`${baseUrl}/sys/retrievePass`, params)
