import Icon from '@/components/Icon/index.vue'
import { MenuOption } from 'naive-ui'
import {
  LocationQueryRaw,
  RouteParamsRaw,
  RouteRecordRaw,
  RouterLink,
} from 'vue-router'
import { CloseCircleOutline } from '@vicons/ionicons5'
import { MenuMixedOption } from 'naive-ui/lib/menu/src/interface'
import { useI18n } from '@/locales/useLocal'
import { isI18n } from '@/config'
import { h } from 'vue'
import { isProtocol } from '@/utils'
const { t } = useI18n()
const label = function label(item: RouteRecordRaw) {
  // 外链
  if (isProtocol(item.path)) {
    return h(
      'a',
      {
        href: item.path,
        target: '_blank',
        rel: 'noopenner noreferrer',
      },
      {
        default: () =>
          isI18n ? t(item.name as string) : (item.meta!.title as string),
      },
    )
  }
  return h(
    RouterLink,
    {
      to: {
        name: item.children
          ? ''
          : item.path.slice(0, 1) === '/'
          ? item.path
          : '/' + item.path,
        query: item.meta!.query as LocationQueryRaw,
        params: item.meta!.params as RouteParamsRaw,
      },
    },
    {
      default: () => (isI18n ? t(item.name as string) : item.meta!.title),
    },
  )
}
export const useData = (data: Array<RouteRecordRaw>) => {
  const arr = data
    .sort((a, b) => a.meta!.orderNo! - b.meta!.orderNo!)
    .map((item: RouteRecordRaw) => {
      if (item.meta!.hideMenu) {
        return false
      }
      const info: MenuOption = {
        label: () => label(item),
        key: item.path,
        icon: () =>
          item.meta!.icon ? (
            <Icon name={item.meta!.icon} size={18}></Icon>
          ) : (
            <CloseCircleOutline />
          ),
      }
      if (item.children) {
        const list = useData(item.children)
        if (list.length) {
          info.children = useData(item.children)
        }
      }
      return info
    })
    .filter((i) => i) as Array<MenuMixedOption>
  return arr
}
