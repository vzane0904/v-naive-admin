import { defineComponent } from 'vue'

export const errorComponent = defineComponent({
  name: 'ErrorComponent',
  setup() {
    return () => <>Error组件</>
  },
})
