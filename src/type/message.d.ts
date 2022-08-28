// 错误消息 msg类型
export interface MsgOptions {
  title: string
  content: string
  iconClass?: string
  time?: number
  color?: string
  key?: string
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
}
// 错误消息 modal类型
export interface MsgModalOptions {
  title: string
  content: string
  iconClass?: string //状态icon
  ok?: Function
  mask?: boolean //是否展示遮罩
  maskClosable?: boolean //点击蒙层是否允许关闭
  keyboard?: boolean // esc 关闭
  okText?: string
}
