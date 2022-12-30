import { axiosTokenName } from '@/config'
import { AxiosRequestConfig } from 'axios'
import { AxiosErrorTip, ContentTypeEnum } from '@/enum/axios'
import { Expand } from '.'
export interface RequestCustom {
  // 是否返回原生响应头 比如：需要获取响应头时使用该属性
  isReturnNativeResponse?: boolean
  // 消息提示类型
  errorMessageModal?: `${AxiosErrorTip}`
  //  是否加入时间戳
  joinTime?: boolean
  // 忽略重复请求
  ignoreRequest?: boolean
  // 有请求重复是cancel提示信息
  readonly ignoreMsg?: string
  // 是否携带token
  withToken?: boolean
  //查找某条请求时根据id查找
  id?: string
  // 是否重试
  readonly openRetry?: boolean
  // 重试次数
  readonly count?: number
  // 重试间隔
  readonly interval?: number
  // 重试第几次
  retryCount?: number
  // 是否转换请求结果直接拿到data
  isConversionRequestResult?: boolean
}
/**
 *  基础配置项+自定义配置项 requestOptions
 **/
export interface RequestOptions extends AxiosRequestConfig {
  timeout?: number
  baseUrl?: string
  headers?: {
    'Content-Type'?:
      | ContentTypeEnum.JSON
      | ContentTypeEnum.FORM_URLENCODED
      | ContentTypeEnum.FORM_DATA
    [axiosTokenName]?: string
    [key: string]: any
  }
  // 配置项，下面的选项都可以在独立的接口请求中覆盖
  requestOptions: RequestCustom
}
/**
 *  记录当前请求约束字段
 **/
export interface PendingType extends RequestOptions {
  cancel: (msg?: string) => void
}
/**
 *  请求成功返回结果
 **/
export interface resultType<T = any> {
  code: number
  data: T
  msg: string
  success: boolean
  timestamp?: number
}

/**
 *  请求失败返回结果
 **/
export interface ErrorInfo {
  status: number
  statusText: string
  success: boolean
  response?: Object
}
/**
 *  处理转换data数据类型
 **/
export type Type<T> = Expand<T>
export type TConversion<b extends boolean, T> = b extends false
  ? Expand<resultType<T>>
  : b extends true
  ? Expand<T>
  : never
