<template>
  <Theme />
  <Login1 v-if="loginTemplate === 1" />
  <Login2 v-if="loginTemplate === 2" />
</template>

<script setup lang="ts">
import Login1 from './template1/index.vue'
import Login2 from './template2/index.vue'
import Theme from './src/conponents/Theme.vue'
import { configStore } from '@/pinia/modules/config'
const { loginTemplate } = storeToRefs(configStore())
</script>

<style lang="scss" scoped></style>
