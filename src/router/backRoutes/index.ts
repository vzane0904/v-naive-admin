import { getPermissions } from '@/api'
import { routeStore } from '@/pinia/modules/routeStore'
import { createRoutes } from '../utils/createRoutes'
import { removeRoute } from '../utils/remove'
export const getBackRoutes = async function () {
  try {
    const store = routeStore()
    // const { allAuth, route } = await permissions()
    const { result, perms } = await getPermissions()
    await removeRoute()
    store.$patch({
      auth: perms,
      routesList: result,
    })
    createRoutes()
  } catch (error) {
    console.log('error', error)
  }
}
