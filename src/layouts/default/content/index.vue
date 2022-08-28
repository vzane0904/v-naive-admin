<template>
  <NLayoutContent class="flex-1">
    <Tabs />
    <div class="flex-1 m-10px p-10px">
      <RouterView />
    </div>
    <LayoutFooter />
  </NLayoutContent>
</template>
<script lang="ts">
import { NLayoutContent } from 'naive-ui'
import { RouterView } from 'vue-router'
import LayoutFooter from '../footer/index.vue'
import Tabs from '../tabs/index.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    NLayoutContent,
    RouterView,
    LayoutFooter,
    Tabs,
  },
})
</script>
