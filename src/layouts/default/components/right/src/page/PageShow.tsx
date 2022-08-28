import { defineComponent } from 'vue'
import { PageSwitch } from '@/components/settingsComp'
import { themeStore } from '@/pinia/theme'
import { NDivider } from 'naive-ui'
export default defineComponent({
  name: 'PageShow',
  setup() {
    const store = themeStore()
    return () => (
      <>
        <NDivider title-placement="center">界面显示</NDivider>
        <PageSwitch name="X面包屑" />
        <PageSwitch name="X面包屑图标" />
        <PageSwitch name="X标签页" />
        <PageSwitch name="X标签页刷新按钮" />
        <PageSwitch
          name="左侧菜单"
          v-model:model={store.showSider}
          disabled={store.layout > 2}
        />
        <PageSwitch name="Logo" v-model:model={store.showLogo} />
        <PageSwitch name="页脚" v-model:model={store.showFooter} />
        <PageSwitch name="全屏按钮" v-model:model={store.isFullScreenBtn} />
        <PageSwitch name="多语言切换" v-model:model={store.showLanGuaGe} />
        <PageSwitch name="顶部设置按钮" v-model:model={store.showTopSet} />
      </>
    )
  },
})
