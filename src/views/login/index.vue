<template>
  <div class="absolute flex right-0 justify-between z-10">
    <Theme />
  </div>
  <Login />
</template>

<script setup lang="ts">
import Login from './template/index.vue'
import Theme from './src/components/Theme.vue'
</script>

<style lang="less" scoped>
@prefixCls: ~'@{prefix}';
:v-deep(.@{prefixCls}-switch__rail) {
  box-shadow: none !important;
}
</style>
