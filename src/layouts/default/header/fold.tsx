import Icon from '@/components/Icon/index.vue'
import { themeStore } from '@/pinia/theme'
import { defineComponent } from 'vue'

export const Fold = defineComponent({
  name: 'Fold',
  setup() {
    const store = themeStore()
    return () => (
      <Icon
        name={'zhedie'}
        size={18}
        class={'px-10px cursor-pointer'}
        onClick={() => (store.siderFold = !store.siderFold)}
        style={{
          transform: store.siderFold ? 'rotate(180deg)' : '',
        }}
      />
    )
  },
})
