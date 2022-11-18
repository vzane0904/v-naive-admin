<script lang="tsx">
import { defineComponent } from 'vue'
import Register from './register.vue'
import Phone from './phone.vue'
import Reset from './reset.vue'
import SwitchTemplate from '../src/components/switchTemplate.vue'
import UserNameLogin from '../src/components/userNameLogin.vue'
import { IUseNameLogin, TargetContext } from '../src/type'
import { userRules } from '../src/config'
import UserName from '../src/components/userName.vue'
import PassWord from '../src/components/passWord.vue'
import PictureCode from '../src/components/pictureCode.vue'
import { useNameLogin } from '../src/hooks/loginFn'
export default defineComponent({
  name: 'User',
  components: {
    SwitchTemplate,
    UserNameLogin,
    UserName,
    PassWord,
    PictureCode,
  },
  setup() {
    // const loading = ref(false)
    const model = ref<TargetContext>('user')
    const ElRef = ref<Element>()
    const picRef = ref<Element>()
    const formValue: IUseNameLogin = reactive({
      userName: 'admin',
      password: 'Pass123456',
      picCode: '',
      picId: '',
    })
    const { loading, loginGO } = useNameLogin(formValue)
    const form = () => (
      <>
        <h1 class="mb-12px text-size-30px">
          <b>登录</b>
        </h1>
        {/* <UserNameLogin ref={ElRef} /> */}
        <NForm
          ref={ElRef}
          model={formValue}
          rules={userRules}
          label-placement="left"
        >
          <UserName v-model:value={formValue.userName} />
          <PassWord v-model:value={formValue.password} />
          <PictureCode
            ref={picRef}
            v-model:value={formValue.picCode}
            v-model:picId={formValue.picId}
          />
        </NForm>
        <div class="flex justify-between">
          <div></div>
          <a class={'cursor-pointer'} onClick={() => (model.value = 'reset')}>
            忘记密码
          </a>
        </div>
        <br />
        {/* loading={(ElRef.value as any)?.loading} */}
        {/* loading.value = true */}
        {/* loading.value = false */}
        {/* ;(ElRef.value as any).subMit(
              () => {
                console.log('ok')
              },
              () => {
                console.log('err')
              },
            ) */}
        <NButton
          type="info"
          loading={loading.value}
          class={'w-1/1 mb-10px'}
          onClick={(e: MouseEvent) => {
            e.preventDefault()
            ;(ElRef.value as any).validate(async (errors: any) => {
              if (!errors) {
                const data: any = await loginGO()
                if (!data) {
                  picRef.value!.run()
                  formValue.picCode = ''
                }
              }
            })
          }}
        >
          登录
        </NButton>
        <div class={'flex justify-between'}>
          <NButton class={'w-1/3'} onClick={() => (model.value = 'phone')}>
            手机号登录
          </NButton>
          <NButton class={'w-1/3'} onClick={() => (model.value = 'register')}>
            注册
          </NButton>
        </div>
        <SwitchTemplate />
      </>
    )
    return () => (
      <>
        {(() => {
          switch (model.value) {
            case 'user':
              return form()
            case 'phone':
              return (
                <Phone onGx={(val: TargetContext) => (model.value = val)} />
              )
            case 'reset':
              return (
                <Reset onGx={(val: TargetContext) => (model.value = val)} />
              )
            case 'register':
              return (
                <Register onGx={(val: TargetContext) => (model.value = val)} />
              )
            default:
              return null
          }
        })()}
      </>
    )
  },
})
</script>
