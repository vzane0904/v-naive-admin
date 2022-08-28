import { ErrorComponent } from '@/components/ErrorComponent'
import { LoadingComponent } from '@/components/LoadingComponent'
import { Fn } from '@vueuse/core'
import { defineAsyncComponent } from 'vue'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
interface Options {
  delay?: number
  timeout?: number
  loading?: boolean
  error?: boolean
  delayCerateTime?: number //延迟创建时间
}
export const createAsyncComponent = (loaderCom: Fn, options: Options = {}) => {
  let {
    delay = 200,
    timeout = 10000,
    loading = true,
    error = true,
    delayCerateTime = 200,
  } = options
  return defineAsyncComponent({
    loader: async () => {
      await sleep(delayCerateTime)
      return loaderCom
    },
    loadingComponent: loading ? LoadingComponent : undefined,
    errorComponent: error ? ErrorComponent : undefined,
    delay,
    timeout,
    onError: error
      ? (error, retry, fail, attempts) => {
          if (error.message.match(/fetch/) && attempts <= 3) {
            // 请求发生错误时重试，最多可尝试 3 次
            retry()
          } else {
            // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
            // 必须调用其中一个才能继续错误处理。
            fail()
          }
        }
      : () => {},
  })
}
