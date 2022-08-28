import { defineStore } from 'pinia'
export const configStore = defineStore({
  id: 'configStore',
  state: () => ({
    prefix: import.meta.env.VITE_APP_PREFIXCLS as string, //前缀
    isRefresh: false,
  }),
})
