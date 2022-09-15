<template>
  <div class="h-full m-16px p-10px" :style="bg">
    <slot></slot>
  </div>
  <!-- <slot> </slot> -->
</template>

<script setup lang="ts" name="Content">
import { themeStore } from '@/pinia/theme'
const { theme } = storeToRefs(themeStore())
const bg = computed(() => {
  return { 'background-color': theme.value ? '#3a3b3c4d' : '#fff' }
})
</script>

<style lang="scss" scoped></style>
