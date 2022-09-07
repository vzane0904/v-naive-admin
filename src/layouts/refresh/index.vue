<script lang="tsx">
import { baseHome } from '@/config'
import { configStore } from '@/pinia/config'
export default defineComponent({
  name: 'Refresh',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const { isRefresh } = storeToRefs(configStore())
    isRefresh.value = true
    onUnmounted(() => {
      isRefresh.value = false
    })
    setTimeout(() => {
      if (route.params.path) {
        router.replace('/' + route.params.path)
      } else {
        router.push(baseHome)
      }
    }, 300)
    return () => <div>刷新中</div>
  },
})
</script>
