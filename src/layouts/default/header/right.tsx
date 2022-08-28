import { defineComponent } from 'vue'
import {
  Screen,
  Language,
  User,
  Settings,
} from '@/layouts/default/components/right'
import { themeStore } from '@/pinia/theme'
export const FunArea = defineComponent({
  name: 'FunArea',
  setup() {
    const store = themeStore()
    return () => (
      <>
        {store.isFullScreenBtn ? <Screen /> : <div></div>}
        {store.showLanGuaGe ? <Language /> : <div></div>}
        <User />
        {store.showTopSet ? <Settings /> : <div></div>}
      </>
    )
  },
})
