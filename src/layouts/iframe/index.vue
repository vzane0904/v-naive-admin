<template>
  <Content>
    <iframe class="w-full h-full" frameborder="0" :src="src"></iframe>
  </Content>
</template>

<script lang="ts" setup>
const src = computed(() => useRoute().meta.iframeSrc)
</script>

<style lang="less" scoped></style>
