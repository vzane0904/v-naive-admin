<template>
  <div>关于xx</div>
</template>

<script lang="ts">
import config from '/package.json'
export default defineComponent({
  setup() {
    console.log(config)

    return {}
  },
})
</script>

<style scoped></style>
