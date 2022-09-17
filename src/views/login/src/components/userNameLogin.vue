<template>
  <NForm
    ref="ElRef"
    :model="formValue"
    :rules="userRules"
    label-placement="left"
  >
    <UserName v-model:value="formValue.userName" />
    <PassWord v-model:value="formValue.password" />
    <PictureCode v-model:value="formValue.pictureCode" />
  </NForm>
</template>
<script setup lang="ts" name="UserNameLogin">
import { userRules } from '../config'
import { useNameLogin } from '../hooks/loginFn'
import { IUseNameLogin } from '../type'
import UserName from './userName.vue'
import PassWord from './passWord.vue'
import PictureCode from './pictureCode.vue'
import { Fn } from '@vueuse/core'
const formValue: IUseNameLogin = reactive({
  userName: 'Admin',
  password: 'Pass123456!',
  pictureCode: 'code',
})
const { ElRef, loginValidate } = useNameLogin(formValue)
const subMit = (
  callback: (params: IUseNameLogin) => {},
  err: Fn = () => {},
) => {
  loginValidate(
    () => (callback ? callback(formValue) : null),
    () => err(),
  )
}
defineExpose({
  subMit,
})
</script>
