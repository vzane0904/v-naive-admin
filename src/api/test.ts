import { http } from '@/http'
import { baseUrl } from '.'
import { Api } from './Api'
export const get401 = () => http.get(`${baseUrl}/${Api.permissions401}`)
