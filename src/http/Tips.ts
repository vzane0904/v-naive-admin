import { AxiosErrorTip, responseErrInfo } from '@/enum/axios'
import { createErrorModal, createErrorMsg } from '@/utils/message'
import { AxiosError } from 'axios'

export const TipMsg = (response: AxiosError) => {
  const strMsg: string = responseErrInfo[response.response!.status]
  const config: any = response.config
  switch (config.requestOptions.errorMessageModal) {
    case AxiosErrorTip.MESSAGE: //message提示
      createErrorMsg({
        title: '系统错误',
        content:
          response.response!.status + strMsg ||
          `${response.response!.status}请联系管理员`,
      })
      break
    case AxiosErrorTip.MODAL: //弹框
      createErrorModal({
        title: '系统错误',
        content:
          response.response!.status + strMsg ||
          `${response?.response!.status}请联系管理员`,
      })
      break
    default:
      break
  }
}
