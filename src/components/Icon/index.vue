<template>
  <svg aria-hidden="true" :class="`icon text-${size}px`">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    prefix: {
      type: String,
      default: 'naive-icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  setup(props) {
    console.log('cccc', props.name)
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    const className = computed(() => `icon text-${props.size}px`)
    return { symbolId, className }
  },
})
</script>
