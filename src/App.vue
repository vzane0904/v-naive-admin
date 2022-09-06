<template>
  <NConfigProvider
    class="flex flex-1 animate__animated animate__bounceInDown w-1/1 h-1/1"
    :theme="store.theme ? darkTheme : null"
    :cls-prefix="confStore.prefix"
    :theme-overrides="themeOverride"
    :locale="getI18n().locale"
    :date-locale="getI18n().date"
    :breakpoints="{ xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, xxl: 1920 }"
    :data-theme="store.theme ? 'dark' : 'light'"
  >
    <NGlobalStyle />
    <NMessageProvider>
      <NDialogProvider>
        <NNotificationProvider>
          <router-view />
          <WindowUtils />
        </NNotificationProvider>
      </NDialogProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>
<script lang="ts" setup>
import { darkTheme } from 'naive-ui'
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
const getI18n = () => {
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
