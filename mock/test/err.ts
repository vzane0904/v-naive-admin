import { baseUrl, resultData } from '../config/index'
const err = 'err'
export default [
  {
    url: `${baseUrl}/${err}/200`,
    method: 'get',
    statusCode: 200,
    timeout: 1000,
    response: () =>
      resultData({
        result: 'get 200',
      }),
  },
  {
    url: `${baseUrl}/${err}/206`,
    method: 'get',
    statusCode: 206,
    timeout: 1000,
    response: () =>
      resultData({
        result: 'get 206',
      }),
  },
  {
    url: `${baseUrl}/${err}/401`,
    method: 'get',
    statusCode: 401,
    timeout: 1000,
    response: () =>
      resultData({
        result: 'get 401',
      }),
  },
  {
    url: `${baseUrl}/${err}/402`,
    method: 'get',
    statusCode: 402,
    timeout: 1000,
    response: () =>
      resultData({
        result: 'get 402',
      }),
  },
  {
    url: `${baseUrl}/${err}/403`,
    method: 'get',
    statusCode: 403,
    timeout: 1000,
    response: () =>
      resultData({
        result: 'get 403',
      }),
  },
  {
    url: `${baseUrl}/${err}/404`,
    method: 'get',
    statusCode: 404,
    timeout: 1000,
    response: () =>
      resultData({
        result: 'get 404',
      }),
  },
  {
    url: `${baseUrl}/${err}/500`,
    method: 'get',
    statusCode: 500,
    timeout: 1000,
    response: () =>
      resultData({
        result: 'get 500',
      }),
  },
  {
    url: `${baseUrl}/${err}/501`,
    method: 'get',
    statusCode: 501,
    timeout: 1000,
    response: () =>
      resultData({
        result: 'get 501',
      }),
  },
  {
    url: `${baseUrl}/${err}/503`,
    method: 'get',
    statusCode: 503,
    timeout: 1000,
    response: () =>
      resultData({
        result: 'get 503',
      }),
  },
]
