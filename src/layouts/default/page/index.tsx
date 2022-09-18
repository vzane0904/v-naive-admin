import { themeStore } from '@/pinia/modules/theme'
import { LayoutOne, LayoutThr, LayoutTwo } from './hock'
export default defineComponent({
  name: 'ViewComponent',
  setup() {
    const theme = themeStore()
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
