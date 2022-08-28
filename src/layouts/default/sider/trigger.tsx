import Icon from '@/components/Icon/index.vue'
import { themeStore } from '@/pinia/theme'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Trigger',
  setup() {
    const store = themeStore()
    const iconFun = (name: string) => <Icon name={name} color={'#fff'} />
    return () => (
      <div
        class={
          'h-48px bg-yellow-700 flex items-center justify-center cursor-pointer'
        }
        onClick={() => (store.siderFold = !store.siderFold)}
      >
        {store.siderFold ? iconFun('xiangyou1') : iconFun('xiangzuo1')}
      </div>
    )
  },
})
