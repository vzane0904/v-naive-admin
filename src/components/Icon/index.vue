<template>
  <svg aria-hidden="true" :class="`icon text-${size}px`">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script>
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
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    const className = computed(() => `icon text-${props.size}px`)
    return { symbolId, className }
  },
})
</script>
