import { http } from '@/http'
import { IUseNameLogin } from '@/views/login/src/type'
import { Api } from './Api'
export const baseUrl = '/api'
export const permissions = () => http.post(`${baseUrl}${Api.permissions}`)
export const movePermissions = () =>
  http.post(`${baseUrl}${Api.movePermissions}`)
// 获取手机号验证码
export const getSms = () => http.get(`${baseUrl}${Api.smsCode}`)
// 用户名登录
export const userNameLogin = (params: IUseNameLogin) =>
  http.post(`${baseUrl}${Api.userNameLogin}`, params)
// 手机号登录
export const userPhoneLogin = (params: any) =>
  http.post(`${baseUrl}${Api.userPhoneLogin}`, params)
// 用户名注册
export const register = (params: any) =>
  http.post(`${baseUrl}${Api.useRegister}`, params)
// 找回密码
export const retrievePass = (params: any) =>
  http.post(`${baseUrl}${Api.useRetrievePass}`, params)
// 角色列表
export const getRoleList = (params: any) => http.get(Api.getRoleList, params)
// 用户列表
export const getUserList = (params: Record<string, Object> | undefined) =>
  http.get(Api.getUserList, params)
// 菜单列表
export const getMenuList = (params: Record<string, Object> | undefined) =>
  http.get(Api.APiMenuList, params)
