<template>
  <Content>
    <div>刷新中</div>
  </Content>
</template>
<script lang="ts" setup>
import { baseHome } from '@/config'
import { configStore } from '@/pinia/modules/config'
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
</script>
