<script lang="tsx">
import IconVue from '@/components/Icon/src/icon.vue'
import { defineComponent, ref } from 'vue'
import OpenDrawer from './page/openDrawer'
interface RefType {
  active: boolean
}
export default defineComponent({
  name: 'Settings',
  setup() {
    const refData = ref<RefType>({ active: false })
    return () => (
      <>
        <IconVue
          name="setting2"
          class={'mr-10px cursor-pointer'}
          onClick={() => (refData.value.active = true)}
        />
        <OpenDrawer onRefCallBack={(v: RefType) => (refData.value = v)} />
      </>
    )
  },
})
</script>
