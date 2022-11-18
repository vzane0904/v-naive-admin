import { DescriptionsProps } from 'naive-ui'
import { VNode } from 'vue'
// const NDescriptionsItem: typeof import('naive-ui')['NDescriptionsItem']
export interface IInfoSchema extends DescriptionsProps {
  label: string
  field: string
  render?: (
    val: any,
    data: Record<string, any>,
  ) => VNode | undefined | JSX.Element | Element | string | number
  show?: (data: Record<string, any>) => boolean
}
interface IData {
  id: any
  [x: string]: any
}
export interface IDescriptionProps extends DescriptionsProps {
  title?: string
  column?: number
  schema?: IInfoSchema[]
  data?: IData
}
export interface IDescExample {
  setDescProps(descProps: IDescriptionProps): void
}

export type UseDescReturnType = [IRregister<IDescExample>, IDescExample]
