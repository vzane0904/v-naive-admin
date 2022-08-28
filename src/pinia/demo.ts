import { defineStore } from 'pinia'
export const demoStore = defineStore({
  id: 'demoStorea', //唯一
  state: () => ({
    count: 0,
  }), //存放数据
  getters: {}, //获取state
  actions: {}, //异步提交
  persist: {
    // https://seb-l.github.io/pinia-plugin-persist/advanced/strategies.html
    enabled: true,
  },
})
