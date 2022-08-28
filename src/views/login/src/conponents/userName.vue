<script lang="tsx">
import { NFormItemRow, NInput } from 'naive-ui'

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
    console.log()
    return () => (
      <NFormItemRow path="userName">
        <NInput
          value={props.value}
          onInput={(ev) => emit('update:value', ev)}
          placeholder="请输入账号"
        ></NInput>
      </NFormItemRow>
    )
  },
})
</script>
