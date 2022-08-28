<template>
  <div>菜单管理</div>
  <router-link to="/movefid">movefid</router-link>
  <br />
  <Abuot />
  <router-link to="/login">login</router-link>
</template>

<script lang="ts" setup>
import Abuot from './abuot/index.vue'
console.log('query', useRoute().query)
console.log('params', useRoute().params)
</script>

<style lang="less" scoped></style>
