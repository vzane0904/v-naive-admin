<template>
  <iframe class="w-full h-full" frameborder="0" :src="path"></iframe>
</template>

<script lang="ts" setup>
const path = useRoute().query.path as string
</script>

<style lang="less" scoped></style>
