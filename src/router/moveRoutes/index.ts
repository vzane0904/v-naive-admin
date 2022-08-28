import { permissions } from '@/api'
import { routeStore } from '@/pinia/modules/routeStore'
import { createRoutes } from '../utils/createRoutes'
import { removeRoute } from '../utils/remove'
export const getMoveRoutes = async function () {
  try {
    const store = routeStore()
    let {
      data: { allAuth, route },
    } = await permissions()
    await removeRoute()
    store.$patch({
      originalData: route,
      auth: allAuth,
    })
    createRoutes()
  } catch (error) {
    console.log('error', error)
  }
}
