<template>
  <Content>
    <div>角色管理</div>
    <n-button>Default</n-button>
    <n-button type="tertiary"> Tertiary </n-button>
    <n-button type="primary"> Primary </n-button>
    <n-button type="info"> Info </n-button>
    <n-button type="success"> Success </n-button>
    <n-button type="warning"> Warning </n-button>
    <n-button type="error"> Error </n-button>
    <n-space>
      <n-button strong secondary> Default </n-button>
      <n-button strong secondary type="tertiary"> Tertiary </n-button>
      <n-button strong secondary type="primary"> Primary </n-button>
      <n-button strong secondary type="info"> Info </n-button>
      <n-button strong secondary type="success"> Success </n-button>
      <n-button strong secondary type="warning"> Warning </n-button>
      <n-button strong secondary type="error"> Error </n-button>
      <n-button strong secondary round> Default </n-button>
      <n-button strong secondary round type="primary"> Primary </n-button>
      <n-button strong secondary round type="info"> Info </n-button>
      <n-button strong secondary round type="success"> Success </n-button>
      <n-button strong secondary round type="warning"> Warning </n-button>
      <n-button strong secondary round type="error"> Error </n-button>
      <n-button strong secondary circle>
        <template v-slot:icon>
          <n-icon><CashIcon /></n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="primary">
        <template v-slot:icon>
          <n-icon><CashIcon /></n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="info">
        <template v-slot:icon>
          <n-icon><CashIcon /></n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="success">
        <template v-slot:icon>
          <n-icon><CashIcon /></n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="warning">
        <template v-slot:icon>
          <n-icon><CashIcon /></n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="error">
        <template v-slot:icon>
          <n-icon><CashIcon /></n-icon>
        </template>
      </n-button>
    </n-space>
  </Content>
</template>

<script lang="ts" setup>
const pro = defineProps({
  routeQuery: Object,
})
console.log('query', useRoute().query)
console.log('params', useRoute().params)
console.log(pro.routeQuery)
</script>

<style lang="less" scoped></style>
