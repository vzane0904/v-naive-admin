import { NFormItem } from 'naive-ui'
import { defineComponent } from 'vue'
import { FormItemProps } from './props/props'

export const FormItemComp = defineComponent({
  name: 'FormItemComp',
  props: FormItemProps,
  setup(props, { slots }) {
    return () => (
      <NFormItem
        label={props.name}
        label-align={'left'}
        label-placement={'left'}
      >
        <div class={'w-1/1 flex flex-row-reverse'}>
          {slots.default && slots.default()}
        </div>
      </NFormItem>
    )
  },
})
