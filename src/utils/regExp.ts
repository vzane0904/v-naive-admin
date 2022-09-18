//去除空格
export const replaceTrim = (text: string) => text.replace(/\s+/g, '')
//去除换行
export const ClearBr = (text: string) =>
  replaceTrim(text.replace(/<\/?.+?>/g, '').replace(/[\r\n]/g, ''))
//去除左侧空格
export const ClearLeftTrim = (text: string) => text.replace(/^\s*/g, '')
//去右空格
export const ClearRightTrim = (text: string) => text.replace(/\s*$/g, '')
//去掉字符串两端的空格
export const ClearTrim = (text: string) => text.replace(/(^\s*)|(\s*$)/g, '')
//去除字符串中间空格
export const ClearCenterTrim = (text: string) => text.replace(/\s/g, '')
//是否为由数字组成的字符串
export const IsNumberStr = (text: string) => /^[0-9]*$/.test(text)
// 邮箱
export const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
// 手机号
export const phoneReg =
  /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
// 车牌号
export const licensePlateReg =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
// 密码8位以上
// export const passWordReg =
//   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*.]{8,}$/
export const grade = {
  //大小写字母0-9随意组合
  one: /^(?=.*[a-zA-Z\d])[a-zA-Z\d]{5,12}$/,
  // ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$
  //至少一个字母(不区分大小写)和一个数字
  two: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/,
  //一个字母(不区分大小写)一个数字和一个特殊字符
  three: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*#&.])[A-Za-z\d$@!%*#&.]{5,12}$/,
  //一个大写字母，一个小写字母，一个数字和一个特殊字符
  rour: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*#&.])[A-Za-z\d$@!%*#&.]{5,12}$/,
}
