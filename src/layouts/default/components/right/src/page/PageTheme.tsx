import { ColorSelect, PageLayout } from '@/components/settingsComp'
import { themeColor, headerColor, siderColor } from '../config'
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
        <ColorSelect colorList={themeColor} v-model:model={store.themeColor} />
        <NDivider title-placement="center">顶栏主题</NDivider>
        <ColorSelect
          colorList={headerColor}
          v-model:model={store.headerColor}
        />
        <NDivider title-placement="center">菜单主题</NDivider>
        <ColorSelect colorList={siderColor} v-model:model={store.siderColor} />
      </>
    )
  },
})
