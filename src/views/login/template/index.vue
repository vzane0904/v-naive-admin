<template>
  <div class="login w-1/1 h-1/1 flex">
    <div class="bg flex flex-col py-50px w-1/2">
      <div
        class="leftHeaderText flex justify-center animate__animated animate__bounceInLeft w-7/10 h-3/10"
      ></div>
      <div
        class="leftLogo flex flex-col animate__animated animate__bounceInLeft w-86/100 justify-center items-center"
      >
        <img :src="loginBoxBg" alt="" srcset="" class="w-368px h-190px" />
        <br />
        <br />
        <p class="m-0 text-size-24px text-white flex items-center">
          <SvgIcon
            name="logo-icon"
            :size="50"
            class="relative top-6px mr-20px"
          />
          <b class="mt-10px">开箱即用的中后台管理系统</b>
        </p>
        <div class="mt-10px text-white">当前版本：{{ pkg.version }}</div>
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
import loginBoxBg from '@assets/svg/login-box-bg.svg'
import User from './user.vue'
const { pkg } = __APP_INFO__
</script>
<style lang="less" scoped>
.login {
  .bg {
    background-image: url(@/assets/svg/login-bg.svg);
    background-size: auto 100%;
    background-position: 100%;
    background-repeat: no-repeat;
  }
}
[data-theme='dark'] {
  .login {
    background-color: #293146;
    .bg {
      background-image: url(@/assets/svg/login-bg-dark.svg) !important;
    }
  }
}
</style>
