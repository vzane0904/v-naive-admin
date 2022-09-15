<template>
  <Content> <NButton @click="errClick401">get 401 </NButton></Content>
</template>
<script lang="ts" setup>
import { get401 } from '@/api/test'

const errClick401 = () => get401()
</script>
<style scoped></style>
