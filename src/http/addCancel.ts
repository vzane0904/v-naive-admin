import { PendingType, RequestOptions } from '@/type/http'
import axios from 'axios'
import { addPending } from './cancel'
export const addCancel = (request: RequestOptions) => {
  const cancelToken = axios.CancelToken
  let pendingObj: PendingType
  request.cancelToken = new cancelToken((c) => {
    pendingObj = { ...request, cancel: c }
  })
  addPending(pendingObj!)
}
