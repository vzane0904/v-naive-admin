import { defineComponent } from 'vue'
import { NDivider } from 'naive-ui'
import { ColorSelect, PageLayout } from '@/components/settingsComp'
import { ColorData } from '../config'
import { themeStore } from '@/pinia/theme'
export default defineComponent({
  name: 'PageTheme',
  setup() {
    const store = themeStore()
    return () => (
      <>
        <NDivider title-placement="center">导航栏模式</NDivider>
        <PageLayout />
        <NDivider title-placement="center">系统主题</NDivider>
        <ColorSelect
          colorList={ColorData.theme}
          v-model:model={store.themeColor}
        />
        <NDivider title-placement="center">顶栏主题</NDivider>
        <ColorSelect
          colorList={ColorData.header}
          v-model:model={store.headerColor}
        />
        <NDivider title-placement="center">菜单主题</NDivider>
        <ColorSelect
          colorList={ColorData.siderColar}
          v-model:model={store.siderColor}
        />
      </>
    )
  },
})
