<template>
  <Content>
    <template #header>
      <div>
        <NH2>关于</NH2>
        <h5>
          <NButton text tag="a" target="_blank" type="primary">
            v-naive-admin
          </NButton>
          是一个基于Vue3.0、Vite、 Naive-UI 、TypeScript
          的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。
        </h5>
      </div>
    </template>
    <Content>11</Content>
  </Content>
</template>

<script lang="ts">
import { useConfig } from '@/hooks/useConfig'

// import config from '/package.json'
export default defineComponent({
  setup() {
    const { getConfig } = useConfig()
    const { bg } = getConfig('bg')
    console.log(__APP_INFO__)

    return { bg }
  },
})
</script>

<style scoped></style>
