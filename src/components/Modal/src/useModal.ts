import { IModalProps, IModalExample, UseModalReturnType } from './type'
export const useModal = (props: IModalProps): UseModalReturnType => {
  if (!getCurrentInstance()) {
    throw new Error(
      'useModal() can only be used inside setup() or functional components!',
    )
  }
  const desc = ref<IModalExample | null>(null)
  function register(methodsProps: IModalExample) {
    desc.value = methodsProps
    methodsProps.setModalProps(props)
  }
  const methods: IModalExample = {
    setModalProps: (props: Partial<IModalProps>) => {
      unref(desc)?.setModalProps(props)
    },
  }
  return [register, methods]
}
