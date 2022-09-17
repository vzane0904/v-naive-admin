<script lang="tsx">
import { colorFFF } from '@/config'
import { themeStore } from '@/pinia/modules/theme'
import Logo from '../logo/index.vue'
import MenuLeft from '../menu/index.vue'
import Trigger from './trigger.vue'
export default defineComponent({
  name: 'Layoutsider',
  setup() {
    const store = themeStore()
    return () =>
      store.showSider ? (
        <NLayoutSider
          collapsed={store.siderFold}
          has-sider
          width={store.siderWidth}
          collapsed-width={store.collapsedWidth}
          inverted={store.siderColor !== colorFFF}
        >
          {store.layout === 1 ? <Logo /> : <div></div>}
          <MenuLeft class={'overflow-auto flex-1'} />
          {store.foldBtnPosition === 'bottom' ? <Trigger /> : <div></div>}
        </NLayoutSider>
      ) : (
        <div></div>
      )
  },
})
</script>
