<template>
  <NConfigProvider
    class="flex flex-1 animate__animated animate__bounceInDown w-1/1 h-1/1"
    :theme="store.theme ? darkTheme : null"
    :cls-prefix="confStore.prefix"
    :theme-overrides="themeOverride"
    :locale="getI1n().locale"
    :date-locale="getI1n().date"
    :breakpoints="{ xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, xxl: 1920 }"
    :data-theme="store.theme ? 'dark' : 'light'"
  >
    <NGlobalStyle />
    <!-- <button @click="check">新权限</button>removeRoute
    <button @click="removeRoute">清空</button>
    <button @click="old">oldback</button>
    <button @click="newv">newback</button> -->
    <!-- class="animate__animated animate__zoomOut" -->
    <router-view />
  </NConfigProvider>
</template>
<script lang="ts" setup>
import { NConfigProvider, NGlobalStyle, darkTheme } from 'naive-ui'
import { themeStore } from '@/pinia/theme'
import { configStore } from '@/pinia/config'
import { themeOverrides } from '@/naive'
import {
  zhCN,
  dateZhCN,
  enUS,
  dateEnUS,
  ruRU,
  dateRuRU,
  zhTW,
  dateZhTW,
} from 'naive-ui'
import { Locale } from './enum/locale'
const store = themeStore()
const confStore = configStore()
const getI1n = () => {
  switch (store.language) {
    case Locale.RU:
      return {
        locale: ruRU,
        date: dateRuRU,
      }
    case Locale.EN:
      return {
        locale: enUS,
        date: dateEnUS,
      }
    case Locale.ZH_TW:
      return {
        locale: zhTW,
        date: dateZhTW,
      }
    default:
      return {
        locale: zhCN,
        date: dateZhCN,
      }
  }
}
const themeOverride = computed(() => {
  return themeOverrides()
})
</script>
<style lang="less">
@prefixCls: ~'@{prefix}';
.@{prefixCls}-config-provider {
  width: 100%;
  height: 100%;
}
</style>
