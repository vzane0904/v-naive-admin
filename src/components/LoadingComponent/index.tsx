import { defineComponent } from 'vue'

export const LoadingComponent = defineComponent({
  name: 'LoadingComponent',
  setup() {
    return () => <>loading组件</>
  },
})
