<template>
  <Content>
    <iframe class="w-full h-full" frameborder="0" :src="path"></iframe>
  </Content>
</template>

<script lang="ts" setup>
const path = computed(() => useRoute().params.path as string)
console.log(useRoute())
</script>

<style lang="less" scoped></style>
