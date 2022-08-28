<template>
  <div class="login w-1/1 h-1/1 flex">
    <div class="bg flex flex-col py-50px w-1/2">
      <div
        class="leftHeaderText flex justify-center animate__animated animate__bounceInLeft w-7/10 h-3/10"
      >
        <img :src="logo" alt="" srcset="" class="w-48px h-48px" />
        <p class="m-0 text-size-24px mt-8px ml-14px text-center text-white">
          <b>{{ title }}</b>
        </p>
      </div>
      <div
        class="leftLogo flex flex-col animate__animated animate__bounceInLeft w-86/100 justify-center items-center"
      >
        <img :src="loginBoxBg" alt="" srcset="" class="w-368px h-190px" />
        <br />
        <br />
        <p class="m-0 text-size-24px text-white">
          <b>开箱即用的中后台管理系统</b>
        </p>
      </div>
    </div>
    <div
      class="LoginFormBox animate__animated animate__bounceInRight flex flex-col flex-1"
    >
      <div class="w-7/10 h-1/3"></div>
      <div class="box w-400px h-2/5 ml-50px">
        <h1 class="mb-12px text-size-30px"></h1>
        <User />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import loginBoxBg from '@/assets/images/login-box-bg.svg'
import logo from '@/assets/images/logo.png'
import User from './user.vue'
const title = import.meta.env.VITE_APP_TITLE
console.log(useRoute().query)
console.log(useRoute().params)
const pro = defineProps({
  type: String,
  name: String,
  keys: String,
})
console.log(pro.type)
console.log(pro.name)
console.log(pro.keys)
</script>
<style lang="less" scoped>
.login {
  .bg {
    background-image: url(@/assets/images/login-bg.svg);
    background-size: auto 100%;
    background-position: 100%;
    background-repeat: no-repeat;
  }
}
</style>
