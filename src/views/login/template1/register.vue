<script lang="tsx">
import { defineComponent, reactive, ref } from 'vue'
import PictureCode from '../src/components/pictureCode.vue'
import {
  FormInst,
  FormItemInst,
  FormItemRule,
  FormRules,
  NButton,
  NForm,
  NFormItem,
  NInput,
} from 'naive-ui'
import { EmailRules, PasswordRules, UserNameRules } from '../src/config'
import { useHttp } from '@/hooks/useHttp'
import { Api } from '@/api/Api'
export default defineComponent({
  name: 'Register',
  emits: ['gx'],
  setup(props, { emit }) {
    const formValue = reactive({
      userName: '',
      password: '',
      reenteredPassword: '',
      picCode: '',
      pictureToken: '',
      email: '',
    })
    function validatePasswordStartWith(
      rule: FormItemRule,
      value: string,
    ): boolean {
      return (
        Boolean(formValue.password) &&
        formValue.password.startsWith(value) &&
        formValue.password.length >= value.length
      )
    }
    function validatePasswordSame(rule: FormItemRule, value: string): boolean {
      return value === formValue.password
    }
    const passwordFormItemRef = ref<FormItemInst | null>(null)
    const rules: FormRules = {
      ...UserNameRules,
      ...PasswordRules,
      ...EmailRules,
      reenteredPassword: [
        {
          required: true,
          message: '请再次输入密码',
          trigger: ['input', 'blur', 'change'],
        },
        {
          validator: validatePasswordStartWith,
          message: '两次密码输入不一致',
          trigger: ['input', 'blur', 'change'],
        },
        {
          validator: validatePasswordSame,
          message: '两次密码输入不一致',
          trigger: ['blur', 'password-input', 'change'],
        },
      ],
      picCode: [
        {
          required: true,
          message: '请输入图片验证码',
          trigger: ['blur', 'password-input', 'change'],
        },
      ],
    }
    const handlePasswordInput = function () {
      if (formValue.reenteredPassword) {
        passwordFormItemRef.value?.validate({ trigger: 'password-input' })
      }
    }
    const formRef = ref<FormInst | null>(null)
    return () => (
      <>
        <h1 class="mb-12px text-size-30px">
          <b>注册</b>
        </h1>
        <NForm
          ref={formRef}
          model={formValue}
          rules={rules}
          label-placement="left"
        >
          <NFormItem path="userName">
            <NInput
              placeholder="请输入用户名"
              v-model:value={formValue.userName}
            />
          </NFormItem>
          <NFormItem path="password">
            <NInput
              type="password"
              v-model:value={formValue.password}
              show-password-on="click"
              placeholder="请输入密码"
              onInput={handlePasswordInput}
            />
          </NFormItem>
          <NFormItem ref={passwordFormItemRef} first path="reenteredPassword">
            <NInput
              placeholder="二次确认密码"
              v-model:value={formValue.reenteredPassword}
              type="password"
              show-password-on="click"
            />
          </NFormItem>
          <NFormItem path="email">
            <NInput placeholder="请输入邮箱" v-model:value={formValue.email} />
          </NFormItem>
          <NFormItem>
            <PictureCode
              v-model:value={formValue.picCode}
              v-model:pictureToken={formValue.pictureToken}
            />
          </NFormItem>
        </NForm>
        <NButton
          class="w-1/1"
          type="info"
          onClick={(e: MouseEvent) => {
            e.preventDefault()
            formRef.value?.validate(async (errors) => {
              if (!errors) {
                try {
                  // const { run } = useHttp({
                  //   Api: '',
                  //   params: { a: 1 },
                  // })
                  // run()
                  useHttp({
                    Api: Api.useRegister,
                    methods: 'get',
                    data: {},
                    headers: {
                      name: 'xx',
                    },
                  })
                } catch {
                  //
                }
                // message.success('验证成功')
              } else {
                // message.error('验证失败')
              }
            })
          }}
        >
          注册
        </NButton>
        <NButton
          class="mt-10px w-1/1"
          onClick={() => {
            emit('gx', 'user')
          }}
        >
          返回
        </NButton>
      </>
    )
  },
})
</script>
