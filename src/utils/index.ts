// 判断是否是https
export const isHttps = (target: string) => /^https:\/\//.test(target)
/**
 *@params isProtocol is https www ？
 **/
export const isProtocol = (target: string) =>
  /^(https:\/\/|http:\/\/|www.)/.test(target)
/**
 *@params DeepCopy 递归深拷贝
 **/
export const DeepCopy = (source: any) => {
  let target: any = {}
  if (typeof source === 'object') {
    target = Array.isArray(source) ? [] : {}
    for (const key in source) {
      // eslint-disable-next-line no-prototype-builtins
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] !== 'object') {
          target[key] = source[key]
        } else {
          target[key] = DeepCopy(source[key])
        }
      }
    }
  } else {
    target = source
  }
  return target
}
/**
 * 平铺节点转换树结构
 * @parentId 父节点id
 * @id 自己的weiyiid
 **/
export const flatTree = (treeArr: Array<any>) => {
  const map: Record<string, any> = []
  const arr = []
  for (const key of treeArr) {
    map[key.id] = key
  }
  for (const key of treeArr) {
    if (key.parentId === 0) {
      arr.push(key)
    } else if (!map[key.parentId]?.children) {
      map[key.parentId].children = [key]
    } else {
      map[key.parentId].children.push(key)
    }
  }
  return arr
}
