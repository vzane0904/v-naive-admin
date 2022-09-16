import { MessageOptions, DialogOptions, NotificationOptions } from 'naive-ui'
import { DialogApiInjection } from 'naive-ui/es/dialog/src/DialogProvider'
import { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider'
import { NotificationApiInjection } from 'naive-ui/es/notification/src/NotificationProvider'
export const useMessage = (): MessageApiInjection => window.$message
export const useDialog = (): DialogApiInjection => window.$useDialog
export const useNotification = (): NotificationApiInjection =>
  window.$useNotification
/**
 * @content 内容
 * @options MessageOptions
 * @returns useMessage
 **/
export const createMsg = (content: string, options?: MessageOptions) => {
  const customOptions: MessageOptions = {
    type: 'success',
  }
  const merge: MessageOptions = Object.assign(customOptions, options)
  return useMessage().create(content, merge)
}

/**
 * @createModal 创建 Modal
 * @options DialogOptions
 * @returns useDialog
 **/
export const createModal = (options: DialogOptions) => {
  const customOptions: DialogOptions = {
    autoFocus: false,
    positiveText: '确定',
  }
  const merge = Object.assign(customOptions, options)
  return useDialog().create(merge)
}
/**
 * @createModal 创建通知
 * @options DialogOptions
 * @returns useNotification
 **/
export const createNotification = (options: NotificationOptions) => {
  const customOptions: NotificationOptions = {
    type: 'success',
    title: '标题',
    content: '暂无内容',
    description: '',
    duration: 3000,
    keepAliveOnHover: true,
  }
  const merge = Object.assign(customOptions, options)
  return useNotification().create(merge)
}
