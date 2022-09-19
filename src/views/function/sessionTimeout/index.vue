<template>
  <Content>
    <NButton @click="errClick401" type="primary"
      >http status 401 退出登录</NButton
    >
  </Content>
</template>
<script lang="ts" setup>
import { get401 } from '@/api/test'

const errClick401 = () => get401()
</script>
