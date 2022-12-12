// import { userNameLogin } from '@/api'
import { baseHome } from '@/config'
import { useProfileStore } from '@/pinia/modules/user'
import { mountNewData } from '@/router/utils/mountRouter'
import { createNotification } from '@/utils/message'
import { Fn } from '@vueuse/core'
import { FormInst } from 'naive-ui'
import { IUseNameLogin } from '../type'
import moment from 'moment'
import { useHttp } from '@/hooks/useHttp'
import { Api } from '@/api/Api'
export const useNameLogin = function (formValue: IUseNameLogin) {
  const route = useRoute()
  const router = useRouter()
  const ElRef = ref<FormInst | null>(null)
  const loading = ref(false)
  const loginGO = async () => {
    try {
      loading.value = true
      const {
        run,
        data,
        loading: httpLoading,
      } = useHttp({
        Api: Api.userNameLogin,
        methods: 'POST',
        data: formValue,
      })
      await run()
      if (data.value) {
        const useStore = useProfileStore()
        useStore.$patch({
          token: data.value.token,
          useName: data.value.useName,
        })
        await mountNewData()
        const create = () =>
          createNotification({
            title: '登录成功',
            description: moment().format('YYYY-MM-DD HH:mm:ss'),
            content: `欢迎回来: ${data.value.useName}`,
            type: 'success',
          })
        if (route.query.redirectPath && route.query.redirectPath !== '/404') {
          router
            .push(route.query.redirectPath as string)
            .finally(() => create())
        } else {
          router
            .push(baseHome)
            .catch(() => {
              console.log('catch')
            })
            .finally(() => create())
        }
        loading.value = unref(httpLoading)
        return data
      }
      loading.value = unref(httpLoading)
      return false
    } catch (error) {
      loading.value = false
      return false
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
    loading,
  }
}
