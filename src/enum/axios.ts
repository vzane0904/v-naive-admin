/**
 * @server: Request result set
 */
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = 1,
  TIMEOUT = 401,
  TYPE = 'success',
}
/**
 * @serverFun: request method
 */
export enum RequestEnum {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  HEAD = 'head',
  PATCH = 'patch',
  OPTIONS = 'options',
}
export const methodData: Array<RequestEnum> = [
  RequestEnum.GET,
  RequestEnum.DELETE,
  RequestEnum.HEAD,
  RequestEnum.PATCH,
  RequestEnum.POST,
  RequestEnum.PUT,
]
/**
 * @header:  contentTyp
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
export enum AxiosErrorTip {
  MESSAGE = 'Message',
  MODAL = 'Modal',
  Notification = 'Notification',
  NONE = 'None',
}
/**
 *  如果有重复提示信息
 * **/
export const ignoreTip = '请求重复,请稍后重试'
// 接口异常 状态码提示信息
export const responseErrInfo: {
  [key: number]: string
} = {
  301: '请求失败,资源地址已改动',
  302: '请求失败,资源地址临时移动',
  303: '请求失败,资源错误',
  // 304:'后端资源未变,前端使用缓存,一般不做提示',
  305: '请求失败,请使用代理访问',
  307: '请求失败,临时重定向',
  400: '请求错误,请检查参数',
  401: '身份验证失败，请重新登录',
  403: '权限不足,禁止访问当前资源',
  404: '资源不存在',
  405: '禁用此请求方式',
  500: '服务器内部错误',
  501: '不支持此请求',
  502: '无效请求',
  503: '暂时无法处理此请求',
  505: '不支持此版本协议',
}
