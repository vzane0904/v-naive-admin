import { PageSwitch } from '../../../settings'
import { themeStore } from '@/pinia/modules/theme'
export default defineComponent({
  name: 'PageShow',
  setup() {
    const {
      showLogo,
      showFooter,
      isFullScreenBtn,
      showLanGuaGe,
      showTopSet,
      layout,
      showSider,
      showTabs,
      showRefresh,
    } = storeToRefs(themeStore())
    return () => (
      <>
        <NDivider title-placement="center">界面显示</NDivider>
        <PageSwitch name="X面包屑" disabled />
        <PageSwitch name="X面包屑图标" disabled />
        <PageSwitch name="标签页" v-model:model={showTabs.value} />
        <PageSwitch name="标签页刷新按钮" v-model:model={showRefresh.value} />
        <PageSwitch
          name="左侧菜单"
          v-model:model={showSider.value}
          disabled={layout.value > 2}
        />
        <PageSwitch name="Logo" v-model:model={showLogo.value} />
        <PageSwitch name="页脚" v-model:model={showFooter.value} />
        <PageSwitch name="全屏按钮" v-model:model={isFullScreenBtn.value} />
        <PageSwitch name="多语言切换" v-model:model={showLanGuaGe.value} />
        <PageSwitch name="顶部设置按钮" v-model:model={showTopSet.value} />
      </>
    )
  },
})
