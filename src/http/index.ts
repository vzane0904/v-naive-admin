import {
  carryToken,
  RETRY_COUNT,
  RETRY_INTERVAL,
  RETRY_OPENRETRY,
} from '@/config'
import { AxiosErrorTip, ContentTypeEnum, ignoreTip } from '@/enum/axios'
import { RequestOptions } from '@/type/http'
import { merge } from 'lodash-es'
import { VAxios } from './axios'
export const data: RequestOptions = {
  timeout: 1000 * 10, // 10ms 超时
  baseUrl: '',
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  // 如果是form-data格式
  // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
  // 配置项，下面的选项都可以在独立的接口请求中覆盖
  requestOptions: {
    id: undefined,
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    isReturnNativeResponse: false,
    // 消息提示类型
    errorMessageModal: AxiosErrorTip.MODAL,
    // 重复信息提示
    ignoreMsg: ignoreTip,
    //  是否加入时间戳
    joinTime: true,
    // 忽略重复请求
    ignoreRequest: true,
    // 是否携带token
    withToken: carryToken,
    // 重试次数
    count: RETRY_COUNT,
    // 重试间隔
    interval: RETRY_INTERVAL,
    // 默认不开启错误重试
    openRetry: RETRY_OPENRETRY,
    // 当前重试次数
    retryCount: 0,
    // 是否转换请求结果直接拿到data
    isConversionRequestResult: true,
  },
}
const createHttp = (request?: RequestOptions) => {
  return new VAxios(merge(data, request))
}
export const http = createHttp()
