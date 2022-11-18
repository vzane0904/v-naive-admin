import { ModalProps } from 'naive-ui'

export interface IModalProps {
  title: string
  props?: Omit<ModalProps, 'preset' | 'title' | 'showIcon' | 'auto-focus'>
  show: boolean
}
export interface IModalExample {
  setModalProps(descProps: Partial<IModalProps>): void
}
export type UseModalReturnType = [IRregister<IModalExample>, IModalExample]

export interface IAttrs {
  onNegativeClick?: () => void
  onClose?: () => void
  positiveClick?: () => void
  onOk?: () => void
}
