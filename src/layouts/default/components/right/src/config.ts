import { useLogOut } from '@/hooks/useLogin'
import { logError } from '@/utils/log'
import { createModal } from '@/utils/message'
import { DropdownOption } from 'naive-ui'

export const userOptions = [
  {
    label: '切换租户',
    key: '切换租户',
    children: [
      {
        label: '租户A',
        key: '租户A',
        onclick: () => {
          console.log(1)
        },
      },
      {
        label: '租户B',
        key: '租户B',
      },
    ],
  },
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
          example.loading = true
          try {
            useLogOut()
          } catch (error) {
            logError(error as Error)
          }
        },
      })
    },
  },
]
