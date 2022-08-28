type LocaleType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'undefined'
  | 'null'
  | 'symbol'
  | 'bigint'
  | 'function'
  | 'object'
  | 'array'
  | 'date'
  | 'regexp'
  | 'math'
/**
 * @toTye 判断数据类型
 * @result [string、number、boolean、undefined、null、symbol、bigint、function、object、array、date、regexp、math ...   ]
 **/
const toTye = function toTye(target: any) {
  let reg = /^\[object ([\w\W]+)\]$/,
    objOrFun = /^(object|function)$/,
    type = typeof target
  return objOrFun.test(type)
    ? (reg.exec(toString.call(target)) as Array<string>)[1].toLowerCase()
    : type
}
const isType = function isType(target: any, result: LocaleType) {
  return toTye(target) === result
}
export default {
  toTye,
  isType,
}
