<template>
  <div class="h-1">
    <div :style="bg">
      <slot></slot>
    </div>
  </div>
  <!-- <slot> </slot> -->
</template>

<script setup lang="ts" name="Content">
import { themeStore } from '@/pinia/theme'

const store = themeStore()
const { theme } = storeToRefs(store)
const bg = ref(theme ? 'background-color: #151515"' : '')
// style="background-color: #151515"
</script>

<style lang="scss" scoped></style>
