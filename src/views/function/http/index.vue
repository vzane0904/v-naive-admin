<template>
  <Content>
    <NButton
      type="primary"
      v-for="item of list"
      :key="item.name"
      @click="item.fn()"
      class="mr-10px"
      >{{ item.name }}</NButton
    >
  </Content>
</template>
<script lang="ts" setup>
import { getErr } from '@/api/test'
const list = [
  { name: '200', fn: () => getErr(200) },
  { name: '206', fn: () => getErr(206) },
  { name: '402', fn: () => getErr(402) },
  { name: '403', fn: () => getErr(403) },
  { name: '404', fn: () => getErr(404) },
  { name: '500', fn: () => getErr(500) },
  { name: '501', fn: () => getErr(501) },
  { name: '503', fn: () => getErr(503) },
]
</script>
<style scoped></style>
