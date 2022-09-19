import { http } from '@/http'
import { baseUrl } from '.'
import { Api } from './Api'
export const get401 = () => http.get(`${baseUrl}${Api.permissions401}`)
export const getErr = (status: 200 | 206 | 402 | 403 | 404 | 500 | 501 | 503) =>
  http.get(`${baseUrl}/err/${status}`)
