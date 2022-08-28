import { defineComponent, watch } from 'vue'
import { NMenu } from 'naive-ui'
import { useRoute } from 'vue-router'
// import { useProfileStore } from '@/pinia/user'
import { useData } from './data'
import { themeStore } from '@/pinia/theme'
import { routeStore } from '@/pinia/modules/routeStore'
import { colorFFF } from '@/config'
export const MenuLeft = defineComponent({
  name: 'MenuLeft',
  setup() {
    const currentRoute = useRoute()
    // let store = useProfileStore()
    const theme = themeStore()
    const rouStore = routeStore()

    watch(
      () => currentRoute.matched,
      (i) => {
        let openList: Array<string> = []
        i.forEach((i) => {
          // eslint-disable-next-line no-unused-expressions
          i.path && openList.push(i.path as string)
        })
        if (!openList.join('').includes('404')) {
          rouStore.openMenu = openList
          rouStore.selectMenu = i[i.length - 1].name as string
        }
      },
      {
        immediate: true,
      },
    )
    return () => (
      <NMenu
        inverted={theme.siderColor === colorFFF}
        collapsed={theme.siderFold}
        options={useData(rouStore.originalData)}
        value={rouStore.selectMenu}
        default-expanded-keys={rouStore.openMenu}
        collapsed-width={theme.collapsedWidth}
        accordion={theme.isAccordion}
      ></NMenu>
    )
  },
})
