import { RouteType } from '@/type/route'
const modules = import.meta.globEager('./**/*.ts')
export let roleRoutesMap: Array<RouteType> = []
export const roleStaticRoutes = async function (): Promise<void> {
  Object.keys(modules).forEach((item: string) => {
    roleRoutesMap = roleRoutesMap.concat(...modules[item].default)
  })
}
