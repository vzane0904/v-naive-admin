<template>
  <Content>
    <NResult
      status="404"
      title="components 404 资源不存在"
      description="生活总归带点荒谬"
    >
      <template v-slot:footer>
        <n-button>请设置正确的 componentName 参数</n-button>
      </template>
    </NResult>
  </Content>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped></style>
