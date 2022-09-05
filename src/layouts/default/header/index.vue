<script lang="tsx">
import { themeStore } from '@/pinia/theme'
import Fold from './fold.vue'
import FunArea from './right.vue'
import Logo from '../logo/index.vue'
import { colorFFF } from '@/config'
export default defineComponent({
  name: 'LayoutHeader',
  setup() {
    const store = themeStore()
    return () => (
      <NLayoutHeader
        inverted={store.headerColor !== colorFFF}
        class={[`h-${store.headerHeight}px`, 'flex', 'items-center']}
      >
        {store.layout > 1 ? <Logo class={'w-197px'} /> : <div></div>}
        {store.foldBtnPosition === 'top' && store.layout !== 3 ? (
          <Fold />
        ) : null}
        <div class={['flex-1']}></div>
        <FunArea />
      </NLayoutHeader>
    )
  },
})
</script>
