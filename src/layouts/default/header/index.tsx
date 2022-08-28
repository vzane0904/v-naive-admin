import { defineComponent } from 'vue'
import { themeStore } from '@/pinia/theme'
import { NLayoutHeader } from 'naive-ui'
import { Fold } from './fold'
import { FunArea } from './right'
import { Logo } from '../logo'
import { colorFFF } from '@/config'
export const LayoutHeader = defineComponent({
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
