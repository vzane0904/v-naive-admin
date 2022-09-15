import { http } from '@/http'
import { baseUrl } from '.'
enum Api {
  permissions401 = 'err/401',
}
export const get401 = () => http.get(`${baseUrl}/${Api.permissions401}`)
