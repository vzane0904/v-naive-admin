<template>
  <Content>
    <iframe class="w-full h-full" frameborder="0" :src="src"></iframe>
  </Content>
</template>

<script lang="ts" setup>
const src = computed(
  () => (useRoute().params.path as string) || (useRoute().query.path as string),
)
console.log(useRoute())
</script>

<style lang="less" scoped></style>
