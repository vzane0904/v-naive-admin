import { PageInputNum, PageSelect, PageSwitch } from '../../../settings'
import { themeStore } from '@/pinia/theme'
import { MenuFold } from '../config'
export default defineComponent({
  name: 'PageFun',
  setup() {
    const store = themeStore()
    return () => (
      <>
        <NDivider title-placement="center">界面功能</NDivider>
        <PageSwitch
          name="菜单折叠"
          v-model:model={store.siderFold}
          disabled={store.layout > 2}
        />
        <PageSwitch
          name="侧边菜单手风琴模式"
          v-model:model={store.isAccordion}
          disabled={store.layout > 2}
        />
        <PageSelect
          name="菜单折叠按钮"
          list={MenuFold}
          v-model:model={store.foldBtnPosition}
        />
        <PageInputNum
          suffix="px"
          name="菜单展开宽度"
          v-model:model={store.siderWidth}
          min={100}
          max={300}
        />
      </>
    )
  },
})
