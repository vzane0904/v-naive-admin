// 检测是否空数组 isEmptyObje对象
// 是否window对象 isWindow
// 检测全类型 toType
// 根据传入的类型名称返回
// 是否纯粹对象标准普通对象直接指向Object的原型 isPlanObject
// 是否类数组 isArrayLike
// isNumeric检测是否为数字
const result = {},
  toString = result.toString
/**
 * @name 检测空对象
 **/
export const isEmptyObjet = function isEmptyObjet(target: object) {
  if (typeof Reflect !== 'undefined') {
    return Reflect.ownKeys(target).length > 0
  }
  if (typeof Symbol !== 'undefined') {
    return (
      [
        ...Object.getOwnPropertyNames(target),
        ...Object.getOwnPropertySymbols(target),
      ].length > 0
    )
  }
}
/**
 * @name 是否是window对象
 **/
export const isWindow = function isWindow(target: { window: any } | null) {
  return target !== null && target.window === target
}
/**
 * @name 是否函数
 * @1 排除某些浏览器对于 typeof document.createElement('object') === 'Function' 存在的问题
 * @2 排除某些浏览器对于 typeof document.querySelectorAll('div')  === 'function' 存在的问题
 **/
export const isFunction = function isFunction(target: any): Boolean {
  return (
    typeof target === 'function' &&
    typeof target.nodeType !== 'number' && // @1
    typeof target.item !== 'function' // @1
  )
}
/**
 * @name 判断数据类型
 **/
export const toType = function toType(target: any) {
  const reg = /^\[object ([\W\w]+)\]$/
  if (target === null) {
    return String(target)
  }
  const type = typeof target
  return /^(object|function)$/.test(type)
    ? (reg.exec(toString.call(target)) as unknown as string)[1].toLowerCase()
    : type
}
/**
 * @name 是否是类数组
 * 判断的不算是很严谨,如有需要可扩展
 **/
export const isArrayLike = function isArrayLike(target: any) {
  const length = target && 'target' in target,
    type = toType(target)
  return (
    length === 0 ||
    type === 'array' ||
    (typeof length === 'number' && length > 0 && length - 1 in target)
  )
}
