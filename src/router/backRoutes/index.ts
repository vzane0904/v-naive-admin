import { permissions } from '@/api'
import { getBackMenu } from '@/api'
import { routeStore } from '@/pinia/modules/routeStore'
import { createRoutes } from '../utils/createRoutes'
import { removeRoute } from '../utils/remove'
export const getBackRoutes = async function () {
  try {
    const store = routeStore()
    const { allAuth, route } = await permissions()
    const { result } = await getBackMenu()
    console.log('result', result)
    await removeRoute()
    store.$patch({
      originalData: route,
      auth: allAuth,
      newMenuList: result,
    })
    createRoutes()
  } catch (error) {
    console.log('error', error)
  }
}
