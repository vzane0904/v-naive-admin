<script lang="tsx">
import { defineComponent } from 'vue'
import { FormItemComp } from './FormItem'
import { SwitchProps } from './props/props'

export default defineComponent({
  name: 'PageSwitch',
  props: SwitchProps,
  emits: ['update:model'],
  setup(props, { emit }) {
    return () => (
      <FormItemComp
        name={props.name}
        v-slots={{
          icon: () => <>🤔</>,
        }}
      >
        <NSwitch
          defaultValue={props.model}
          disabled={props.disabled}
          v-slots={{
            icon: () => <>🤔</>,
          }}
          onUpdateValue={(v) => emit('update:model', v)}
        />
      </FormItemComp>
    )
  },
})
</script>
<style lang="less" scoped>
@prefixCls: ~'@{prefix}';
.@{prefixCls}-form-item{
  height: 40px;
}
</style>
