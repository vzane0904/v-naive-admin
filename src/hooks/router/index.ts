import { logError, logWarn } from '@/utils/log'
import { Router } from 'vue-router'
import { router as rootRouter } from '@/router'
const handleError = (e: Error) => logError(e)
/**
 * @useGo 路由跳转
 * @push String
 * @replace String
 * @returns ()=>Function
 * **/
export const useGo = (_router?: Router) => {
  let router = _router
  if (!router) {
    router = rootRouter
  }
  const { push, replace } = router
  const go = (path: string, query: any = {}, isReplace = false) => {
    return new Promise((resolve, reject) => {
      if (!path) {
        logWarn('Path不可为空')
        reject(false)
      }
      if (isReplace) {
        return replace(path)
          .catch(handleError)
          .then(
            () => resolve(true),
            () => reject(false),
          )
      }
      if (path === '/login' && !query.redirectPath) {
        Reflect.set(query, 'redirectPath', router?.currentRoute.value.fullPath)
      }
      push({ path, query })
        .catch(handleError)
        .then(
          () => resolve(true),
          () => reject(false),
        )
    })
  }
  return go
}
/**
 * @useRefresh 刷新
 * @refresh String
 * @returns ()=>Function
 * **/
export const useRefresh = (_router: Router) => {
  let router = _router
  if (!router) {
    router = useRouter()
  }
  const { replace, currentRoute } = router
  const { path } = unref(currentRoute.value)
  const refresh = () => {
    replace(path)
  }
  return refresh
}
/**
 * @useRouter 获取路由实例
 * @returns Router
 * **/
export const useCustomizeRouter = () => rootRouter
