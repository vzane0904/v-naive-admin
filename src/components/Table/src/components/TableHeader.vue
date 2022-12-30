<template>
  <div :class="props.tableClass + '_header'">
    <div class="title" v-if="slot.title">
      <slot name="title"></slot>
    </div>
    <div class="title" v-else>{{ props.title }}</div>
    <div class="toolbar">
      <slot name="toolbar"></slot>
      <NDivider v-if="slot.toolbar" vertical />

      <Icon
        name="shuaxin"
        @click="reload"
        class="cursor-pointer mr-10px"
        :size="18"
      />
      <NDropdown
        trigger="click"
        :options="LangOptions"
        :value="size"
        @select="(v) => emit('update:size', v)"
      >
        <div class="flex justify-center items-center h-1/1">
          <Icon name="colum-height" :size="20" class="cursor-pointer" />
        </div>
      </NDropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue'
const slot = useSlots()
const emit = defineEmits(['update:size'])
const props = withDefaults(
  defineProps<{
    title: string
    tableClass: string
    reload: () => void
    size: string
  }>(),
  {
    title: '',
  },
)
const LangOptions = [
  {
    label: '默认',
    key: 'medium',
  },
  {
    label: '紧凑',
    key: 'small',
  },
  {
    label: '大型',
    key: 'large',
  },
]
</script>

<style lang="less" scoped>
@prefixCls: ~'@{prefix}';
.@{prefixCls}-table-wrapper {
  &_header {
    height: 40px;
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 16px;
      font-weight: 500;
      line-height: 40px;
      color: rgba(0, 0, 0, 0.85);
      cursor: pointer;
    }
    .toolbar {
      display: flex;
      align-items: center;
    }
  }
}
</style>
