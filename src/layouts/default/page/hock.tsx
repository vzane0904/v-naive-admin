import { NLayout } from 'naive-ui'
import { defineComponent } from 'vue'
import LayoutContent from '../content/index.vue'
import { LayoutHeader } from '../header'
import { Layoutsider } from '../sider'
export const LayoutOne = defineComponent({
  name: 'LayoutOne',
  setup() {
    return () => (
      <NLayout has-sider>
        <Layoutsider></Layoutsider>
        <NLayout>
          <LayoutHeader></LayoutHeader>
          <LayoutContent></LayoutContent>
        </NLayout>
      </NLayout>
    )
  },
})
export const LayoutTwo = defineComponent({
  name: 'LayoutOne',
  setup() {
    return () => (
      <NLayout>
        <LayoutHeader></LayoutHeader>
        <NLayout has-sider>
          <Layoutsider></Layoutsider>
          <LayoutContent></LayoutContent>
        </NLayout>
      </NLayout>
    )
  },
})
export const LayoutThr = defineComponent({
  name: 'Layouthree',
  setup() {
    return () => (
      <NLayout>
        <LayoutHeader></LayoutHeader>
        <LayoutContent></LayoutContent>
      </NLayout>
    )
  },
})
