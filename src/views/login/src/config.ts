import { emailReg, grade } from '@/utils/regExp'
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
        } else if (!grade.two.test(value)) {
          return new Error('密码必须包含：大小写字母，数字，字符($@!%*#&.)')
        }
        return true
      },
      trigger: ['input', 'blur'],
    },
  ],
}
export const EmailRules: FormRules = {
  email: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入邮箱')
        } else if (!emailReg.test(value)) {
          return new Error('邮箱不符合规则')
        }
        return true
      },
      trigger: ['input', 'blur'],
    },
  ],
}
const PictureRules: FormRules = {
  picCode: [
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
// 用户名登录
export const userRules: FormRules = {
  ...UserNameRules,
  ...PasswordRules,
  ...PictureRules,
}
