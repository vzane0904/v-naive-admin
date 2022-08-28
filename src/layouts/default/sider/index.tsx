import { colorFFF } from '@/config'
import { themeStore } from '@/pinia/theme'
import { NLayoutSider } from 'naive-ui'
import { defineComponent } from 'vue'
import { Logo } from '../logo'
import MenuLeft from '../menu/index.vue'
import Trigger from './trigger'
export const Layoutsider = defineComponent({
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
