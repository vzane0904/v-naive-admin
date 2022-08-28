import { themeStore } from '@/pinia/theme'
import { NLayout } from 'naive-ui'
import { defineComponent, onMounted } from 'vue'
import { LayoutOne, LayoutThr, LayoutTwo } from './hock'
export default defineComponent({
  name: 'ViewComponent',
  setup() {
    const theme = themeStore()
    onMounted(async () => {})
    return () => (
      <>
        <NLayout class={['flex-1']}>
          {theme.layout === 1 ? (
            <LayoutOne></LayoutOne>
          ) : theme.layout === 2 ? (
            <LayoutTwo></LayoutTwo>
          ) : (
            <LayoutThr></LayoutThr>
          )}
        </NLayout>
      </>
    )
  },
})
