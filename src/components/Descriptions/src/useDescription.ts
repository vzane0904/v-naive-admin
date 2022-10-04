import { IDescExample, IDescriptionProps, UseDescReturnType } from './type'

export const useDescription = (props: IDescriptionProps): UseDescReturnType => {
  if (!getCurrentInstance()) {
    throw new Error(
      'useDescription() can only be used inside setup() or functional components!',
    )
  }
  const desc = ref<IDescExample | null>(null)
  function register(methodsProps: IDescExample) {
    desc.value = methodsProps
    methodsProps.setDescProps(props)
  }
  const methods: IDescExample = {
    setDescProps: (props: IDescriptionProps) => {
      unref(desc)?.setDescProps(props)
    },
  }
  return [register, methods]
}
