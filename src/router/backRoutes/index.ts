import { permissions } from '@/api'
import { routeStore } from '@/pinia/modules/routeStore'
import { createRoutes } from '../utils/createRoutes'
import { removeRoute } from '../utils/remove'
export const getBackRoutes = async function () {
  try {
    const store = routeStore()
    const { allAuth, route } = await permissions()
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
