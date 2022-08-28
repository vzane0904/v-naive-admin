import { Icon } from '@/components/Icon'
import { MenuType } from '@/type/route'
import { MenuOption } from 'naive-ui'
import { LocationQueryRaw, RouterLink } from 'vue-router'
import { CloseCircleOutline } from '@vicons/ionicons5'
import { MenuMixedOption } from 'naive-ui/lib/menu/src/interface'
import { useI18n } from '@/locales/useLocal'
import { isI18n } from '@/config'
import { h } from 'vue'
import { isProtocol } from '@/utils'
const { t } = useI18n()
const label = function label(item: MenuType) {
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
        default: () => (isI18n ? t(item.name) : item.meta.title),
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
        query: item.meta.query as LocationQueryRaw,
      },
    },
    {
      default: () => (isI18n ? t(item.name) : item.meta.title),
    },
  )
}
export const useData = (data: Array<MenuType>) => {
  let arr = data
    .map((item: MenuType) => {
      if (item.meta.hideMenu) {
        return false
      }
      let info: MenuOption = {
        label: () => label(item),
        key: item.path,
        icon: () =>
          item.meta.icon ? (
            <Icon name={item.meta.icon}></Icon>
          ) : (
            <CloseCircleOutline />
          ),
      }
      if (item.children) {
        let list = useData(item.children)
        if (list.length) {
          info.children = useData(item.children)
        }
      }
      return info
    })
    .filter((i) => i) as Array<MenuMixedOption>
  return arr
}
