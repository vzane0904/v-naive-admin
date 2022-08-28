import { defineComponent } from 'vue'
import { PageSelect, PageSwitch } from '@/components/settingsComp'
import { themeStore } from '@/pinia/theme'
import { AnimationType } from '../config'
import { NDivider } from 'naive-ui'
export default defineComponent({
  name: 'PageAnimation',
  setup() {
    const store = themeStore()
    return () => (
      <>
        <NDivider title-placement="center">动画</NDivider>
        <PageSwitch name="顶部进度条" v-model:model={store.progressBar} />
        <PageSwitch name="X切换loading" v-model:model={store.switchLoading} />
        <PageSwitch name="X切换动画" v-model:model={store.toggleAnimation} />
        <PageSelect
          name="X动画类型"
          list={AnimationType}
          v-model:model={store.animationType}
          disabled
        />
      </>
    )
  },
})
