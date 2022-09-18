export const baseUrl = '/api'
export function resultData<T = any>(
  data: T,
  code = 200,
  success = true,
  msg = '',
) {
  return {
    code,
    msg,
    data,
    success,
  }
}
