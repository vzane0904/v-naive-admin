import { defineComponent } from 'vue'

export const ErrorComponent = defineComponent({
  name: 'ErrorComponent',
  setup() {
    return () => <>Error组件</>
  },
})
