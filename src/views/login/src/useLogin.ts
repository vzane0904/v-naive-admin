// import { getSms } from '@/api'
import { ref } from 'vue'

export const useGetCode = function (count = 60) {
  let isGetPhone = ref<boolean>(false) //loading
  let codeTest = ref<string>('获取验证码') //倒计时文字
  const current = ref(count) //几秒后停止
  const getPhoneCode = async function () {
    isGetPhone.value = true
    codeTest.value = `${current.value}秒后重新获取`
    // getSms()
    let inter = setInterval(() => {
      codeTest.value = --current.value + '秒后重新获取'
      if (current.value === 0) {
        codeTest.value = '获取验证码'
        isGetPhone.value = false
        current.value = count
        clearInterval(inter)
      }
    }, 1000)
  }
  return {
    isGetPhone,
    codeTest,
    getPhoneCode,
  }
}
