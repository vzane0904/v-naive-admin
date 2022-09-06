import { userNameLogin } from '@/api'
import { baseHome } from '@/config'
import { useProfileStore } from '@/pinia/user'
import { Fn } from '@vueuse/core'
import { FormInst } from 'naive-ui'
import { IUseNameLogin } from '../type'
export const useNameLogin = function (formValue: IUseNameLogin) {
  const route = useRoute()
  const router = useRouter()
  const ElRef = ref<FormInst | null>(null)
  const validate = (callBack?: Fn | null, error?: Fn | null) => {
    ElRef.value?.validate(async (errors: any) => {
      if (!errors) {
        if (callBack) {
          await callBack()
        }
        const { success, msg, data } = await userNameLogin(formValue)
        if (success) {
          const useStore = useProfileStore()
          useStore.$patch({
            token: data.token,
          })
          if (route.query.redirectPath && route.query.redirectPath !== '/404') {
            router.push(route.query.redirectPath as string)
          } else {
            router.push(baseHome)
          }
        } else {
          console.log(msg)
        }
      } else {
        if (error) {
          await error()
        }
        console.log('errors', errors)
      }
    })
  }
  return {
    ElRef,
    validate,
  }
}
