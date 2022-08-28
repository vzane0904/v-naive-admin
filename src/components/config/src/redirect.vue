<script lang="tsx">
import { baseHome } from '@/config'
import { configStore } from '@/pinia/config'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Redirect',
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
        router.go(-1)
      } else {
        router.push(baseHome)
      }
    }, 300)
    return () => <div>刷新中</div>
  },
})
</script>
