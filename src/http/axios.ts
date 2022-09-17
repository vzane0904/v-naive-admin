import {
  axiosAddTime,
  axiosTimeName,
  axiosTokenName,
  RETRY_COUNTCODE,
} from '@/config'
import { RequestEnum } from '@/enum/axios'
import { useGo } from '@/hooks/router'
import { routeStore } from '@/pinia/modules/routeStore'
import { SetOptional } from '@/type'
import { ErrorInfo, RequestOptions, TConversion } from '@/type/http'
import { createNotification } from '@/utils/message'
import { uuid } from '@/utils/utils'
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import { addCancel } from './addCancel'
import { cancelPending, deletePending } from './cancel'
import { TipMsg } from './Tips'
export class VAxios {
  private requestOptions: RequestOptions
  private AxiosInstance: AxiosInstance
  constructor(requestOptions: RequestOptions) {
    this.requestOptions = requestOptions
    this.AxiosInstance = axios.create(requestOptions)
    this.interceptors() //this.AxiosInstance
  }
  //   拦截器axiosInstance: AxiosInstance
  private interceptors() {
    this.initRequestInterceptors()
    this.initResponseInterceptors()
  }
  //   请求拦截器
  private initRequestInterceptors() {
    this.AxiosInstance.interceptors.request.use(
      async (request: AxiosRequestConfig) => {
        // .log('request', request)
        const { requestOptions } = request as any
        const { joinTime, withToken, ignoreRequest } = requestOptions
        if (!requestOptions.id) {
          requestOptions.id = uuid()
        }
        if (joinTime && axiosAddTime.includes(request.method as RequestEnum)) {
          try {
            Reflect.set(request.params, axiosTimeName, Number(new Date()))
          } catch {
            request.params = {}
            Reflect.set(request.params, axiosTimeName, Number(new Date()))
          }
        }
        if (withToken) {
          Reflect.set(request.headers!, axiosTokenName, 'set token')
        }
        if (ignoreRequest) {
          cancelPending(request as RequestOptions)
        }
        addCancel(request as RequestOptions)
        return request
      },
      async (error: AxiosError) => {
        createNotification({
          title: '系统异常',
          description: error.response!.status as unknown as string,
          content: error.message,
          type: 'error',
        })
        return Promise.reject(error)
      },
    )
  }
  //   响应拦截器
  private initResponseInterceptors() {
    this.AxiosInstance.interceptors.response.use(
      async (response: AxiosResponse) => {
        const config: RequestOptions = response.config as any
        deletePending(config)
        if (config.requestOptions?.isReturnNativeResponse) {
          //是否需要对原生头处理
          return response
        }
        // 直接获取到data
        if (config.requestOptions.isConversionRequestResult) {
          const { success, message } = response.data
          if (!success) {
            createNotification({
              title: '请求错误',
              content: message,
              type: 'error',
            })
            // console.log('请求异常', message)
          }
          return response.data.data
        }
        return response.data
      },
      // eslint-disable-next-line complexity
      async (error: AxiosError) => {
        /**
         * 1.是否是cancel取消的
         * 2.判断重试
         * 3.超时
         * 4.兜底处理
         **/
        // 1、
        if (error.response?.status === 401) {
          createNotification({
            title: '系统异常',
            description: '401',
            content: '登录过期，即将重新登陆',
            type: 'error',
          })
          const routerS = routeStore()
          routerS.reset()
          const go = useGo()
          go('/login')
          return Promise.reject(error)
        }
        if (axios.isCancel(error)) {
          const err: ErrorInfo = {
            status: 4004,
            statusText: error.message || 'error',
            success: false,
          }
          //   deletePending(error.config as RequestOptions)
          return Promise.reject(err)
        }
        // 2、
        const config: RequestOptions = error.config as any
        const [RETRY_COUNT, RETRY_INTERVAL] = [
          config.requestOptions.count,
          config.requestOptions.interval,
        ]
        if (
          config &&
          RETRY_COUNT &&
          config.requestOptions.openRetry &&
          error.response &&
          RETRY_COUNTCODE.includes(error.response.status)
        ) {
          config.requestOptions.retryCount =
            config.requestOptions.retryCount || 0
          if (config.requestOptions.retryCount >= RETRY_COUNT) {
            return Promise.reject(error.response || { message: error.message })
          }
          config.requestOptions.retryCount++
          const backSend = new Promise<void>((resolve) => {
            setTimeout(() => {
              resolve()
            }, RETRY_INTERVAL || 1)
          })
          return backSend.then(() => {
            return this.AxiosInstance(config)
          })
        }
        // 3、
        if (
          error.code === 'ECONNABORTED' &&
          error.message.indexOf('timeout') !== -1
        ) {
          //is overtime
          const ignore: ErrorInfo = {
            status: 4004,
            statusText: '请求超时',
            success: false,
          }
          // createErrorMsg({ title: '系统异常', content: '请求超时' })
          createNotification({
            title: '系统异常',
            description: error.response!.status as unknown as string,
            content: '请求超时',
            type: 'error',
          })
          deletePending(config)
          return Promise.reject(ignore)
        } else if (error.config) {
          TipMsg(error)
          const requestOptions: any = error.config
          const result: ErrorInfo = {
            status: error.response!.status,
            statusText: error.response!.statusText || '??',
            success: false,
            response: requestOptions.requestOptions.isReturnNativeResponse
              ? error.response
              : {},
          }
          deletePending(config)
          return Promise.reject(result)
        }
        return Promise.reject(error)
      },
    )
  }
  /**
   * @description 请求主体
   **/
  require<T = any>(
    config: SetOptional<RequestOptions, 'requestOptions'>,
  ): Promise<T> {
    return this.AxiosInstance.request({
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  get<T = any, conversion extends boolean = true>(
    url: string,
    params?: Record<string, Object>,
    config?: RequestOptions,
  ): Promise<TConversion<conversion, T>> {
    return this.require({ url, method: 'get', params, ...config })
  }

  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  head<T = any, conversion extends boolean = true>(
    url: string,
    params?: Record<string, Object>,
    config?: RequestOptions,
  ): Promise<TConversion<conversion, T>> {
    return this.require({
      url,
      method: 'head',
      params,
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  options<T = any, conversion extends boolean = true>(
    url: string,
    params?: Record<string, Object>,
    config?: RequestOptions,
  ): Promise<TConversion<conversion, T>> {
    return this.require({
      url,
      method: 'options',
      params,
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  delete<T = any, conversion extends boolean = true>(
    url: string,
    params?: Record<string, Object>,
    config?: RequestOptions,
  ): Promise<TConversion<conversion, T>> {
    return this.require({
      url,
      method: 'delete',
      params,
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  post<T = any, conversion extends boolean = true>(
    url: string,
    data?: Record<string, any>,
    config?: RequestOptions,
  ): Promise<TConversion<conversion, T>> {
    return this.require({ url, method: 'post', data, ...config })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  put<T = any, conversion extends boolean = true>(
    url: string,
    data?: Record<string, any>,
    config?: RequestOptions,
  ): Promise<TConversion<conversion, T>> {
    return this.require({
      url,
      method: 'put',
      data,
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  patch<T = any, conversion extends boolean = true>(
    url: string,
    data?: Record<string, any>,
    config?: RequestOptions,
  ): Promise<TConversion<conversion, T>> {
    return this.require({
      url,
      method: 'patch',
      data,
      ...config,
    })
  }
  /**
   * @url string
   * @params {}
   * @config RequestOptions
   **/
  uploadFile<T = FormData, conversion extends boolean = true>(
    url: string,
    data?: FormData,
    config?: RequestOptions,
  ): Promise<TConversion<conversion, T>> {
    return this.require({
      url,
      method: 'post',
      data,
      ...config,
    })
  }
}
