<script lang="tsx">
export default defineComponent({
  name: 'UserName',
  props: {
    value: {
      type: [String],
      default: '',
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    return () => (
      <NFormItemRow path="userName">
        <NInput
          value={props.value}
          onInput={(ev) => emit('update:value', ev)}
          placeholder="默认账号 admin"
        ></NInput>
      </NFormItemRow>
    )
  },
})
</script>
