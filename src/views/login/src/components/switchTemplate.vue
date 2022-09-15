<template>
  <NDivider> 切换其他登录模板 </NDivider>
  <div class="flex justify-evenly">
    <NTag
      :type="loginTemplate === index + 1 ? 'success' : 'info'"
      v-for="(item, index) in TagList"
      :key="item"
      @click="check(index)"
    >
      {{ item }}
    </NTag>
  </div>
</template>

<script lang="ts" setup name="SwitchTemplate">
import { configStore } from '@/pinia/modules/config'

const TagList = ['模板1', '模板2']
const { loginTemplate } = storeToRefs(configStore())
const check = (index: number) => {
  loginTemplate.value = index + 1
}
</script>

<style lang="scss" scoped></style>
