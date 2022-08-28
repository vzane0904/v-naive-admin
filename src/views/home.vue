<template>
  <Content>
    <div>主页 {{ u }}</div>
    <input type="text" v-model="u" />
    <router-link :to="{ path: '/login', query: { name: 'xx' } }" :query="{}"
      >主页</router-link
    >
  </Content>
</template>

<script lang="ts" setup>
const u = ref('11')
console.log('query', useRoute().query)
console.log('params', useRoute().params)
const pro = defineProps({
  routeQuery: Object,
})
console.log(pro.routeQuery)
</script>

<style lang="less" scoped></style>
