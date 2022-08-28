import { PendingType, RequestOptions } from '@/type/http'
/**
  @name axiosRequestMap
  @Fun 所有请求暂存
**/
export const axiosRequestMap: Map<string, PendingType> = new Map()
/**
  @name cancelRequestMap
  @Fun 所有请求的取消方法暂存
**/
export const cancelRequestMap: Map<string, () => void> = new Map()
/**
  @name handleName
  @Fun 处理暂存到 axiosRequestMap 方法中时对应的KEY
**/
export const handleName = (config: RequestOptions) => {
  let url: string
  if (!config.requestOptions.ignoreRequest) {
    url = `${config.url}_${config.requestOptions.id}_${config.method}`
  } else {
    url = `${config.url}_${config.method}`
  }
  return url
}

/**
  @name addPending
  @Fun 添加一条到 axiosRequestMap
**/
export const addPending = (request: PendingType) => {
  axiosRequestMap.set(handleName(request), request)
  cancelRequestMap.set(request.requestOptions.id!, request.cancel)
}
/**
  @name deletePending
  @Fun map中删除一条
**/
export const deletePending = (request: RequestOptions) => {
  axiosRequestMap.delete(handleName(request))
  if (axiosRequestMap.size === 0) {
    cancelRequestMap.clear()
  } else {
    cancelRequestMap.delete(request.requestOptions.id!)
  }
}
/**
  @name cancelPending
  @Fun 调用取消方法取消请求，并从map中删除
**/
export const cancelPending = (request: RequestOptions) => {
  if (axiosRequestMap.has(handleName(request))) {
    axiosRequestMap
      .get(handleName(request))
      ?.cancel(request.requestOptions.ignoreMsg)
    deletePending(request)
  }
}
