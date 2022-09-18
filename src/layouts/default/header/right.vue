<script lang="tsx">
import {
  Screen,
  Language,
  User,
  Settings,
  FixedSettings,
} from '@/layouts/default/components/right'
import { themeStore } from '@/pinia/modules/theme'
export default defineComponent({
  name: 'FunArea',
  setup() {
    const store = themeStore()
    return () => (
      <>
        {store.isFullScreenBtn ? <Screen /> : <div></div>}
        {store.showLanGuaGe ? <Language /> : <div></div>}
        <User />
        {store.showTopSet ? <Settings /> : <FixedSettings />}
      </>
    )
  },
})
</script>
