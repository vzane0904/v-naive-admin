<script lang="tsx">
import { NH4 } from 'naive-ui'
import { PropType } from 'vue'
import { IDescExample, IDescriptionProps } from './type'
export default defineComponent({
  name: 'Description',
  props: {
    bordered: {
      type: Boolean,
      default: true,
    },
    labelPlacement: {
      type: String as PropType<'left' | 'top'>,
      default: 'left',
    },
  },
  emits: ['register'],
  setup(props, { emit }) {
    // save config options
    const propsVal = ref<IDescriptionProps>()
    // get all config options
    const getMergeProps = computed(() => {
      return {
        ...unref(propsVal),
      }
    })
    const data = computed(() => getMergeProps.value?.data)
    const schema = computed(() => getMergeProps.value?.schema || [])
    // update config options
    function setDescProps(optionsProps: IDescriptionProps): void {
      propsVal.value = {
        ...unref(props),
        ...unref(propsVal.value),
        ...optionsProps,
      }
    }
    const methods: IDescExample = {
      setDescProps,
    }
    const renderDescItem = () => (
      <NDescriptions {...unref(getMergeProps)} title="">
        {unref(schema).map((item) => {
          const show =
            (item.show && item.show(data.value!)) || item.show === undefined
          return show ? (
            <NDescriptionsItem
              v-slots={{
                label: () => <div>{item.label}</div>,
              }}
            >
              {item.render
                ? item.render(data.value![item.field], item)
                : data.value![item.field]}
            </NDescriptionsItem>
          ) : null
        })}
      </NDescriptions>
    )
    const render = () => (
      <div>
        <NH4>{getMergeProps.value.title}</NH4>
        <NDivider />
        {renderDescItem()}
      </div>
    )
    onMounted(() => {
      emit('register', methods)
    })
    return () => render()
  },
})
</script>
