<template>
  <div :class="['flex', 'flex-col', props.full ? 'h-full' : '']">
    <div v-if="slots.header" class="111 px-24px py-16px" :style="bg">
      <slot name="header"></slot>
    </div>
    <div class="flex-1 m-16px p-10px mb-0" :style="bg" v-if="slots.default">
      <slot></slot>
    </div>
  </div>
  <!-- <slot> </slot> -->
</template>

<script setup lang="ts" name="Content">
import { useConfig } from '@/hooks/useConfig'
const slots = useSlots()
const { getConfig } = useConfig()
const { bg } = getConfig('bg')
const props = withDefaults(
  defineProps<{
    full?: boolean
  }>(),
  {
    full: false,
  },
)
</script>

<style lang="less" scoped></style>
