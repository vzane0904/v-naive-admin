import { useLogOut } from '@/hooks/useLogin'
import { logError } from '@/utils/log'
import { createModal } from '@/utils/message'
import { DropdownOption } from 'naive-ui'

export const userOptions = [
  {
    label: '修改密码',
    key: '修改密码',
    fn: () => {
      console.log('修改密码')
    },
  },
  {
    label: '个人中心',
    key: '个人中心',
  },
  {
    label: '退出登录',
    key: '退出登录',
    fn: (_key: string | number, _option: DropdownOption) => {
      const example = createModal({
        title: '温馨提示',
        type: 'warning',
        content: '是否确认退出系统?',
        positiveText: '确定',
        negativeText: '取消',
        maskClosable: false,
        onPositiveClick: async () => {
          return new Promise(async (resolve) => {
            example.loading = true
            try {
              await useLogOut()
              resolve(true)
            } catch (error) {
              logError(error as Error)
            }
          })
        },
      })
    },
  },
]
