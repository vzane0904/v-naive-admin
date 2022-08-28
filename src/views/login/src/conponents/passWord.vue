<script lang="tsx">
import { NFormItemRow, NInput } from 'naive-ui'
export default defineComponent({
  name: 'PassWord',
  props: {
    value: {
      type: [String],
      default: '',
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    return () => (
      <NFormItemRow path="password">
        <NInput
          // type="password"
          value={props.value}
          onInput={(ev) => emit('update:value', ev)}
          show-password-on="click"
          placeholder="请输入密码"
        />
      </NFormItemRow>
    )
  },
})
</script>
