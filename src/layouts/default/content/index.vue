<template>
  <NLayoutContent :class="`flex-1`">
    <Tabs v-if="showTabs" />
    <div :class="`flex-1 ${fixCLass}-layout-scroll-container-box`">
      <RouterView />
    </div>
    <BackTop />
    <LayoutFooter />
  </NLayoutContent>
</template>
<script lang="ts" setup>
import { themeStore } from '@/pinia/theme'
import LayoutFooter from '../footer/index.vue'
import Tabs from '../tabs/index.vue'
import BackTop from '../backTop/index.vue'
import { getEnv } from '@/hooks/useEnv'
const { showTabs } = storeToRefs(themeStore())
const fixCLass = getEnv('VITE_APP_PREFIXCLS')
</script>
