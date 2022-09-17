<script lang="tsx">
import Icon from '@/components/Icon/index.vue'
import { configStore } from '@/pinia/modules/config'
export default defineComponent({
  name: 'Settings',
  setup() {
    const { openSettingDrawer } = storeToRefs(configStore())
    return () => (
      <>
        <Icon
          name="setting2"
          class={'mr-10px cursor-pointer'}
          onClick={() => (openSettingDrawer.value = true)}
        />
      </>
    )
  },
})
</script>
