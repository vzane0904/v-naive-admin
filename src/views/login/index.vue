<template>
  <Theme />
  <login1 v-if="loginTemplate === 1" />
  <login2 v-if="loginTemplate === 2" />
</template>

<script setup lang="ts">
import login1 from './template1/index.vue'
import login2 from './template2/index.vue'
import Theme from './src/conponents/Theme.vue'
const loginTemplate = ref(1)
console.log(11)
</script>

<style lang="scss" scoped></style>
