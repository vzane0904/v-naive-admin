import { userNameLogin } from '@/api'
import { baseHome } from '@/config'
import { useProfileStore } from '@/pinia/modules/user'
import { mountNewData } from '@/router/utils/mountRouter'
import { createNotification } from '@/utils/message'
import { Fn } from '@vueuse/core'
import { FormInst } from 'naive-ui'
import { IUseNameLogin } from '../type'
import moment from 'moment'
export const useNameLogin = function (formValue: IUseNameLogin) {
  const route = useRoute()
  const router = useRouter()
  const ElRef = ref<FormInst | null>(null)
  const loginGO = async () => {
    const { token, useName } = await userNameLogin(formValue)
    const useStore = useProfileStore()
    useStore.$patch({
      token: token,
      useName,
    })
    await mountNewData()
    const create = () =>
      createNotification({
        title: '登录成功',
        description: moment().format('YYYY-MM-DD HH:mm:ss'),
        content: `欢迎回来: ${useName}`,
        type: 'success',
      })
    if (route.query.redirectPath && route.query.redirectPath !== '/404') {
      router.push(route.query.redirectPath as string).finally(() => create())
    } else {
      router.push(baseHome).finally(() => create())
    }
  }
  const loginValidate = (callBack?: Fn | null, error?: Fn | null) => {
    ElRef.value?.validate(async (errors: any) => {
      if (!errors) {
        if (callBack) {
          await callBack()
          loginGO()
        }
      } else if (error) {
        await error()
      }
    })
  }

  return {
    ElRef,
    loginValidate,
    loginGO,
  }
}
