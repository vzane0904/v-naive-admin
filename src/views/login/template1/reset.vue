<script lang="tsx">
import { defineComponent, reactive, ref } from 'vue'
import { FormInst, NButton, NForm, NFormItem, NInput } from 'naive-ui'

import { retrievePass } from '@/api'
import { useGetCode } from '../src/useLogin'
import { userRules } from '../src/config'
export default defineComponent({
  name: 'Reaet',
  emits: ['gx'],
  setup(props, { emit }) {
    const formValue = reactive({
      userName: null,
      smsCode: null,
    })
    const ElRef = ref<FormInst | null>(null)
    const { isGetPhone, getPhoneCode, codeTest } = useGetCode(15)
    return () => (
      <>
        <h1 class="mb-12px text-size-30px">
          <b>重置密码</b>
        </h1>
        <NForm
          ref={ElRef}
          model={formValue}
          rules={userRules}
          label-placement="left"
        >
          <NFormItem path="userName">
            <NInput
              placeholder="请输入用户名"
              v-model:value={formValue.userName}
            />
          </NFormItem>
          <NFormItem path="smsCode">
            <NInput
              v-model:value={formValue.smsCode}
              show-password-on="click"
              placeholder="请输入验证码"
            />
            <NButton disabled={isGetPhone.value} onClick={getPhoneCode}>
              {codeTest.value}
            </NButton>
          </NFormItem>
        </NForm>
        <NButton
          class="w-1/1"
          type="info"
          onClick={(e: MouseEvent) => {
            e.preventDefault()
            ElRef.value?.validate(async (errors) => {
              if (!errors) {
                console.log('ok')
                try {
                  let { success, msg } = await retrievePass(formValue)
                  if (success) {
                    console.log('重置密码成功')
                  } else {
                    console.log(msg)
                  }
                } catch {
                  //
                }
                // message.success('验证成功')
              } else {
                console.log('errors')
                // message.error('验证失败')
              }
            })
          }}
        >
          重置
        </NButton>
        <NButton
          class="mt-10px w-1/1"
          onClick={() => {
            console.log('11')
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
