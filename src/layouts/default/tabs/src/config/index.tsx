import { h } from 'vue'
import { Icon } from '@/components/Icon'
import { NIcon } from 'naive-ui'
export const renderIcon = (name: string) => {
  return () => {
    return h(NIcon, null, {
      default: () => <Icon name={name} />,
    })
  }
}
