/* eslint-disable @typescript-eslint/no-unused-vars */

import { http } from '@/http'
import { RequestCustom, RequestOptions } from '@/type/http'
import { Method } from 'axios'
import { merge } from 'lodash-es'
type Headers = Pick<RequestOptions, 'headers'>
interface ISetHeader {
  [key: string]: any
}
// eslint-disable-next-line no-unused-vars
interface IUseHttp extends Headers {
  readonly Api: string
  data?: Record<string, any>
  params?: Record<string, any>
  readonly methods: Method
  props?: RequestCustom
}

export const useHttp = function (configProps: IUseHttp) {
  // console.log('xxxx', configProps.Api)
  const loading = ref(false)
  const err = ref()
  const data = ref()
  // 发起请求
  const run = () => {
    return new Promise(async (resolve) => {
      loading.value = true
      try {
        const result = await http.require({
          url: configProps.Api,
          method: configProps.methods,
          data: configProps.data,
          params: configProps.params,
          headers: configProps.headers,
          requestOptions: {
            ...configProps.props,
          },
        })
        // 如果获取原生请求头直接成功
        if (configProps.props?.isReturnNativeResponse) {
          data.value = result
          err.value = undefined
          resolve(true)
        }
        // 拿到data结果
        if (!configProps.props?.isConversionRequestResult) {
          data.value = result
          err.value = undefined
          resolve(true)
        } else if (result && result.success && result.code !== 0) {
          //获取原生接口结果
          data.value = result
          err.value = undefined
        } else {
          data.value = undefined
          err.value = result
        }
        resolve(true)
      } catch (error: any) {
        data.value = undefined
        err.value = error
        resolve(true)
      }
      loading.value = false
    })
  }
  const setProps = (configParams: RequestCustom) => {
    configProps.props = merge(configProps.props, configParams)
  }
  const setHeaders = (configParams: ISetHeader) =>
    (configProps.headers = merge(configProps.headers, configParams))
  return { run, loading, err, data, setHeaders, setProps }
}
