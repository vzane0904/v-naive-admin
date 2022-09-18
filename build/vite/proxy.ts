import type { ProxyOptions } from 'vite'
type ProxyItem = [string, string]
type ProxyList = ProxyItem[]
type ProxyTargetItem = Record<string, ProxyOptions>
const isHttps = (target: string) => /^https:\/\//.test(target)

export const createProxy = (list: ProxyList) => {
  const proxyList: ProxyTargetItem = {}

  for (const [prefix, target] of list) {
    proxyList[prefix] = {
      target: target,
      changeOrigin: true,
      secure: isHttps(target),
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
    }
  }
  return proxyList
}
