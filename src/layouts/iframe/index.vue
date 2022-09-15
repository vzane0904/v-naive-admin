<template>
  <Content>
    <iframe class="w-full h-full" frameborder="0" :src="path"></iframe>
  </Content>
</template>

<script lang="ts" setup>
import Content from '../default/content/index.vue'
const path = useRoute().query.path as string
</script>

<style lang="less" scoped></style>
