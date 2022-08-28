import { defineComponent } from 'vue'

export const loadingComponent = defineComponent({
  name: 'LoadingComponent',
  setup() {
    return () => <>loading组件</>
  },
})
