<script lang="tsx">
import { defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useData } from './data'
import { themeStore } from '@/pinia/theme'
import { routeStore } from '@/pinia/modules/routeStore'
import { colorFFF } from '@/config'
import { refStore } from '@/pinia/ref'
export default defineComponent({
  name: 'MenuLeft',
  setup() {
    const { selectMenu, originalData } = storeToRefs(routeStore())
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
      if (layout.value === 1) {
        return siderColor.value === colorFFF
      } else if (layout.value === 3) {
        return headerColor.value === colorFFF
      }
    })
    watch(
      () => currentRoute.matched,
      (val) => (selectMenu.value = val.slice(-1)[0].path),
      {
        immediate: true,
      },
    )
    return () => (
      <NMenu
        ref={menuRef}
        inverted={isInverted.value}
        collapsed={siderFold.value}
        value={selectMenu.value}
        options={useData(originalData.value)}
        collapsed-width={collapsedWidth.value}
        accordion={isAccordion.value}
        indent={16}
        mode={layout.value === 3 ? 'horizontal' : 'vertical'}
      ></NMenu>
    )
  },
})
</script>
