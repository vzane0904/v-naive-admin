<template>
  <NLayoutContent class="flex-1">
    <Tabs v-if="showTabs" />
    <div class="flex-1 m-10px p-10px">
      <RouterView />
    </div>
    <BackTop />
    <LayoutFooter />
  </NLayoutContent>
</template>
<script lang="ts" setup>
import { themeStore } from '@/pinia/theme'
import { NLayoutContent } from 'naive-ui'
import { RouterView } from 'vue-router'
import LayoutFooter from '../footer/index.vue'
import Tabs from '../tabs/index.vue'
import BackTop from '../backTop/index.vue'
const { showTabs } = storeToRefs(themeStore())
</script>
