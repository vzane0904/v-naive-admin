<script lang="tsx">
import Svg from '@/components/Svg/index.vue'
import { colorFFF } from '@/config'
import { themeStore } from '@/pinia/theme'
export default defineComponent({
  name: 'Logo',
  setup() {
    const { showLogo, layout, siderFold, headerColor } = storeToRefs(
      themeStore(),
    )
    const titColor = computed(() =>
      layout.value !== 1 && headerColor.value === colorFFF ? '#0960bd' : '',
    )
    return () =>
      showLogo.value ? (
        <div class="h-48px flex items-center">
          <Svg name="资源1" class="mx-10px" style={{ fontSize: '32px' }} />
          {layout.value === 2 || !siderFold.value ? (
            <strong
              style={{
                'font-size': '16px',
                'font-weight': 700,
                transition: 'all .5s',
                'line-height': 'normal',
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
