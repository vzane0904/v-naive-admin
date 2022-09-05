<script lang="tsx">
import Svg from '@/components/Svg/index.vue'
import { themeStore } from '@/pinia/theme'
// import { NGradientText } from 'naive-ui'
export default defineComponent({
  name: 'Logo',
  setup() {
    const store = themeStore()
    const tit = (
      <strong
        style={{
          'font-size': '16px',
          'font-weight': 700,
          transition: 'all .5s',
          'line-height': 'normal',
        }}
      >
        VNaive Admin
      </strong>
    )
    return () =>
      store.showLogo ? (
        <div class="h-48px flex items-center">
          <Svg name="资源1" class="mx-10px" style={{ fontSize: '32px' }} />
          {store.layout === 2 ? tit : !store.siderFold ? tit : null}
          {/* {!store.siderFold && store.layout !== 2 && (

          )} */}
        </div>
      ) : (
        <div></div>
      )
  },
})
</script>
