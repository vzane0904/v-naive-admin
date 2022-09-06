<script lang="tsx">
import { defineComponent } from 'vue'
import Register from './register.vue'
import Phone from './phone.vue'
import Reset from './reset.vue'
import { userRules } from '../src/config'
import { IUseNameLogin, TargetContext } from '../src/type'
import userName from '../src/conponents/userName.vue'
import userPassWord from '../src/conponents/passWord.vue'
import userPictureCode from '../src/conponents/pictureCode.vue'
import { useNameLogin } from '../src/hooks/loginFn'
export default defineComponent({
  name: 'User',
  components: {
    userName,
    userPassWord,
    userPictureCode,
  },
  setup() {
    const formValue: IUseNameLogin = reactive({
      userName: 'Admin',
      password: 'Pass123456!',
      pictureCode: 'code',
    })
    const model = ref<TargetContext>('user')
    const { ElRef, validate } = useNameLogin(formValue)
    const form = () => (
      <>
        <h1 class="mb-12px text-size-30px">
          <b>登录</b>
        </h1>
        <NForm
          ref={ElRef}
          model={formValue}
          rules={userRules}
          label-placement="left"
        >
          <userName v-model:value={formValue.userName} />
          <userPassWord v-model:value={formValue.password} />
          <userPictureCode v-model:value={formValue.pictureCode} />
        </NForm>
        <div class="flex justify-between">
          <div></div>
          <a class={'cursor-pointer'} onClick={() => (model.value = 'reset')}>
            忘记密码
          </a>
        </div>
        <br />
        <NButton
          type="info"
          class={'w-1/1 mb-10px'}
          onClick={(e: MouseEvent) => {
            e.preventDefault()
            validate(
              async () => {
                console.log(112)
              },
              async () => {},
            )
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
      </>
    )
    onMounted(() => {
      // getPicCode()
    })
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
