<script lang="tsx">
import { defineComponent, watch } from 'vue'
import {
  RouteRecordRaw,
  useRoute,
  LocationQueryRaw,
  RouteParamsRaw,
  RouterLink,
} from 'vue-router'
import { themeStore } from '@/pinia/modules/theme'
import { routeStore } from '@/pinia/modules/routeStore'
import { colorFFF } from '@/config'
import { refStore } from '@/pinia/modules/ref'
import Icon from '@/components/Icon/index.vue'
import { MenuOption } from 'naive-ui'
import { MenuMixedOption } from 'naive-ui/lib/menu/src/interface'
import { useI18n } from '@/locales/useLocal'
import { isI18n } from '@/config'
import { h } from 'vue'
import { isProtocol } from '@/utils'
const { t } = useI18n()
export default defineComponent({
  name: 'MenuLeft',
  setup() {
    const { selectMenu, routesList } = storeToRefs(routeStore())
    const refState = refStore()
    const { menuRef } = storeToRefs(refState)
    const {
      siderColor,
      siderFold,
      collapsedWidth,
      isAccordion,
      layout,
      headerColor,
    } = storeToRefs(themeStore())
    const currentRoute = useRoute()
    const isInverted = computed(() => {
      if (layout.value === 3) {
        return headerColor.value === colorFFF
      }
      return siderColor.value === colorFFF
    })
    watch(
      () => currentRoute.matched,
      (val) => (selectMenu.value = val.slice(-1)[0].path),
      {
        immediate: true,
      },
    )
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
            default: () => (isI18n ? t(item.meta!.title) : item.meta!.title),
          },
        )
      }
      return h(
        RouterLink,
        {
          to: {
            name: item.children ? '' : item.path,
            query: item.meta!.query as LocationQueryRaw,
            params: item.meta!.params as RouteParamsRaw,
          },
        },
        {
          default: () => (isI18n ? t(item.meta!.title) : item.meta!.title),
        },
      )
    }
    const useData = (data: Array<RouteRecordRaw>, sublevel = false) => {
      const arr = data
        .map((item: RouteRecordRaw) => {
          if (item.meta!.hideMenu) {
            return false
          }
          const info: MenuOption = {
            label: () => label(item),
            key: item.path,
            icon: () =>
              !sublevel ? (
                <Icon name={item.meta!.icon} size={18}></Icon>
              ) : (
                <span></span>
              ),
          }
          if (item.children) {
            const list = useData(item.children)
            if (list.length) {
              info.children = useData(item.children, true)
            }
          }
          return info
        })
        .filter((i) => i) as Array<MenuMixedOption>
      return arr
    }
    return () => (
      <NMenu
        ref={menuRef}
        inverted={isInverted.value}
        collapsed={siderFold.value}
        value={selectMenu.value}
        options={useData(routesList.value)}
        collapsed-width={collapsedWidth.value}
        accordion={isAccordion.value}
        indent={16}
        mode={layout.value === 3 ? 'horizontal' : 'vertical'}
      ></NMenu>
    )
  },
})
</script>
<style lang="less" scoped>
@prefix:~ '@{prefix}';
.@{prefix}-menu--vertical :deep(.@{prefix}-submenu-children) {
  .@{prefix}-menu-item-content__icon {
    margin-right: -5px !important;
  }
}
</style>
