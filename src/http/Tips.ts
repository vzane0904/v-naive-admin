import { AxiosErrorTip, responseErrInfo } from '@/enum/axios'
import { RequestOptions } from '@/type/http'
import { createModal, createMsg, createNotification } from '@/utils/message'
import type { AxiosError } from 'axios'
export const TipMsg = (response: AxiosError) => {
  const strMsg: string = responseErrInfo[response.response!.status]
  const config: RequestOptions = response.config as RequestOptions
  const msg =
    `${response.response!.status} ${strMsg}` ||
    `${response.response!.status}请联系管理员`
  switch (config.requestOptions.errorMessageModal) {
    case AxiosErrorTip.MESSAGE: //message提示
      createMsg(msg, { type: 'error' })
      break
    case AxiosErrorTip.MODAL: //弹框
      createModal({
        title: '系统错误',
        content: msg,
        type: 'error',
      })
      break
    case AxiosErrorTip.Notification: //通知
      createNotification({
        title: '系统错误',
        content: msg,
        type: 'error',
      })
      break
    default:
      // 不提示兜底
      break
  }
}
