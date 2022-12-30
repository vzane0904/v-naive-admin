<script lang="tsx">
import { colorFFF } from '@/config'
import { themeStore } from '@/pinia/modules/theme'
import SvgIcon from '@/components/SvgIcon/index.vue'
export default defineComponent({
  name: 'Logo',
  setup() {
    const { showLogo, layout, siderFold, headerColor, siderColor } =
      storeToRefs(themeStore())
    const titColor = computed(() => {
      if (layout.value >= 2) {
        return headerColor.value === colorFFF ? '#0960bd' : ''
      }
      return siderColor.value === colorFFF ? '#0960bd' : ''
    })
    const border = computed(() => {
      if (layout.value === 1 && siderColor.value === colorFFF) {
        return {
          borderBottom: '1px solid #d9d9d9',
          borderRight: '1px solid #d9d9d9',
        }
      }
      return {}
    })
    return () =>
      showLogo.value ? (
        <div class="h-48px flex items-center" style={border.value}>
          <SvgIcon name="logo-icon" size={40} class="mx-10px" />
          {layout.value === 2 || !siderFold.value ? (
            <strong
              class="text-size-16px leading-normal transition-all duration-500"
              style={{
                color: titColor.value,
              }}
            >
              {import.meta.env.VITE_APP_TITLE}
            </strong>
          ) : null}
        </div>
      ) : (
        <div></div>
      )
  },
})
</script>
