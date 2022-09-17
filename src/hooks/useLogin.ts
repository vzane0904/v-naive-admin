import { routeStore } from '@/pinia/modules/routeStore'
import { useProfileStore } from '@/pinia/modules/user'
import { useGo } from './router'
/**
 * @name logOut 退出
 * @returns Promise
 * **/
export const useLogOut = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { token } = storeToRefs(useProfileStore())
      token.value = ''
      const go = useGo()
      await go('/login')
      const routerS = routeStore()
      await routerS.reset()
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}
