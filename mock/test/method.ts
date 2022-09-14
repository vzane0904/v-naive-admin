import { baseUrl, resultData } from '../index'
export default [
  {
    url: `${baseUrl}/test/get`,
    method: 'get',
    timeout: 1000,
    response: () =>
      resultData({
        result: 'get请求',
      }),
  },
  {
    url: `${baseUrl}/test/post`,
    method: 'post',
    timeout: 1000,
    response: () =>
      resultData({
        result: 'post请求',
      }),
  },
  {
    url: `${baseUrl}/test/options`,
    method: 'options',
    timeout: 1000,
    response: () =>
      resultData({
        result: 'options请求',
      }),
  },
  {
    url: `${baseUrl}/test/delete`,
    method: 'delete',
    timeout: 1000,
    response: () =>
      resultData({
        result: 'delete请求',
      }),
  },
  {
    url: `${baseUrl}/test/put`,
    method: 'put',
    timeout: 1000,
    response: () =>
      resultData({
        result: 'put请求',
      }),
  },
  {
    url: `${baseUrl}/test/patch`,
    method: 'patch',
    timeout: 1000,
    response: () =>
      resultData({
        result: 'patch请求',
      }),
  },
]
