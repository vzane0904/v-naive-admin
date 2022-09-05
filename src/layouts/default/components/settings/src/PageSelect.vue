<script lang="tsx">
import { SelectProps } from './props/props'
export default defineComponent({
  name: 'PageSelect',
  props: SelectProps,
  emits: ['update:model'],
  setup(props, { emit }) {
    const val = toRef(props, 'model')
    return () => (
      <NFormItem
        label={props.name}
        label-align={'left'}
        label-placement={'left'}
      >
        <div class={'w-1/1 flex flex-row-reverse'}>
          <NSelect
            default-value={val.value}
            onUpdateValue={(v) => emit('update:model', v)}
            placeholder={'请选择'}
            size={'small'}
            options={props.list}
            clearable={props.clearable}
            class={'w-100px'}
            disabled={props.disabled}
          />
        </div>
      </NFormItem>
    )
  },
})
</script>
