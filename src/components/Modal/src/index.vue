<script lang="tsx">
import { defineComponent, ref } from 'vue'
import { IAttrs, IModalExample, IModalProps } from './type'
export default defineComponent({
  name: 'Modal',
  emits: ['register'],
  setup(props, { emit, slots, attrs }) {
    const propsVal = ref<IModalProps>()
    const show = computed(() => propsVal.value?.show ?? false)
    function setModalProps(optionsProps: IModalProps): void {
      propsVal.value = {
        ...unref(props),
        ...unref(propsVal.value),
        ...optionsProps,
      }
    }
    const methods: IModalExample = {
      setModalProps,
    }
    onMounted(() => {
      emit('register', methods)
    })
    const slotsDefault = () => {
      if (slots.default) {
        return (
          <>
            {slots.default()}
            {slots.footer && slots.footer()}
          </>
        )
      } else if (slots.footer) {
        return <>{slots.footer()}</>
      }
      return <></>
    }
    const { positiveClick, onOk, onClose, onNegativeClick }: IAttrs = attrs
    return () => (
      <NModal
        v-model:show={show.value}
        mask-closable={false}
        title={unref(propsVal)?.title}
        onPositiveClick={positiveClick || onOk}
        onNegativeClick={onNegativeClick || onClose}
        preset="dialog"
        {...propsVal.value?.props}
        {...attrs}
        showIcon={false}
        auto-focus={false}
        positiveText={
          slots.footer ? '' : propsVal.value?.props?.positiveText || '确定'
        }
        negativeText={
          slots.footer ? '' : propsVal.value?.props?.negativeText || '取消'
        }
        v-slots={{
          default: () => slotsDefault(),
        }}
      />
    )
  },
})
</script>
