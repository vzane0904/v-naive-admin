import { getCurrentInstance } from 'vue'
import { IFormProps } from './config/type'

export const useForm = function (props: IFormProps) {
  console.log(props)

  if (!getCurrentInstance()) {
    throw new Error(
      'useForm() can only be used inside setup() or functional components!',
    )
  }
}
