<script lang="tsx">
import Icon from '@/components/Icon/index.vue'
import OpenDrawer from './page/openDrawer.vue'
interface RefType {
  active: boolean
}
export default defineComponent({
  name: 'FixedSettings',
  setup() {
    const refData = ref<RefType>({ active: false })
    return () => (
      <>
        <div class=" fixed right-0 top-1/2 z-10">
          <NButton type="warning" class="px-10px rounded-6px">
            <Icon
              name="setting2"
              class={'cursor-pointer'}
              size={20}
              onClick={() => (refData.value.active = true)}
            />
          </NButton>
          <OpenDrawer onRefCallBack={(v: RefType) => (refData.value = v)} />
        </div>
      </>
    )
  },
})
</script>
