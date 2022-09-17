import { grade, phoneReg } from '@/utils/regExp'
import { FormItemRule, FormRules } from 'naive-ui'
export const UserNameRules: FormRules = {
  userName: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入用户名')
        } else if (!grade.one.test(value)) {
          return new Error('用户名长度5-12位(字母/数字)')
        }
        return true
      },
      trigger: ['input', 'blur'],
    },
  ],
}
export const PasswordRules: FormRules = {
  password: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入密码')
        } else if (!grade.rour.test(value)) {
          return new Error('密码必须包含：大小写字母，数字，字符($@!%*#&.)')
        }
        return true
      },
      trigger: ['input', 'blur'],
    },
  ],
}
const SmsCode: FormRules = {
  smsCode: [
    {
      required: true,
      message: '请输入手机验证码',
      min: 6,
      max: 6,
      trigger: ['input', 'blur'],
    },
  ],
}
const PictureRules: FormRules = {
  pictureCode: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入图片验证码')
        }
        return true
      },
      trigger: ['input', 'blur'],
    },
  ],
}
const phone: FormRules = {
  phone: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入手机号')
        } else if (!phoneReg.test(value)) {
          return new Error('手机号不正确')
        }
        return true
      },
      trigger: ['input', 'blur'],
    },
  ],
}
// 手机号登录注册
export const PhoneRules: FormRules = {
  ...phone,
  ...SmsCode,
}
// 用户名登录
export const userRules: FormRules = {
  ...UserNameRules,
  ...PasswordRules,
  ...PictureRules,
}
