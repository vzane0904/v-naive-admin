<template>
  <div class="absolute right-0 top-0 z-10 mt-12px mr-12px">
    <NSwitch
      v-model:value="theme"
      size="large"
      :rail-style="railStyle"
      :rubber-band="false"
    >
      <template #checked>
        <Icon name="Sunny-qing-baitian" />
      </template>
      <template #unchecked>
        <Icon name="day" />
      </template>
    </NSwitch>
  </div>
</template>
<script lang="ts" setup>
import { themeStore } from '@/pinia/modules/theme'
import { CSSProperties } from 'vue'
const { theme } = storeToRefs(themeStore())
const railStyle = ({
  focused,
  checked,
}: {
  focused: boolean
  checked: boolean
}) => {
  const style: CSSProperties = {}
  if (checked) {
    style.background = '#151515'
    if (focused) {
      style.boxShadow = '0 0 0 2px #fff'
    }
  } else {
    style.background = '#151515'
    if (focused) {
      style.boxShadow = '0 0 0 2px #151515'
    }
  }
  style.border = '1px solid #fff'
  return style
}
</script>

<style lang="scss" scoped></style>
