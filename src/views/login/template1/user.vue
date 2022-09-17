<script lang="tsx">
import { defineComponent } from 'vue'
import Register from './register.vue'
import Phone from './phone.vue'
import Reset from './reset.vue'
import SwitchTemplate from '../src/components/switchTemplate.vue'
import UserNameLogin from '../src/components/userNameLogin.vue'
import { TargetContext } from '../src/type'
export default defineComponent({
  name: 'User',
  components: {
    SwitchTemplate,
    UserNameLogin,
  },
  setup() {
    const loading = ref(false)
    const model = ref<TargetContext>('user')
    const ElRef = ref<Element>()
    const form = () => (
      <>
        <h1 class="mb-12px text-size-30px">
          <b>登录</b>
        </h1>
        <UserNameLogin ref={ElRef} />
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
          loading={loading.value}
          onClick={(e: MouseEvent) => {
            loading.value = true
            e.preventDefault()
            ;(ElRef.value as any).subMit(
              () => {
                console.log('ok')
              },
              () => {
                console.log('err')
                loading.value = false
              },
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
