import { defineStore } from 'pinia'
export const useProfileStore = defineStore({
  id: 'useProfileStore', //唯一
  state: () => ({
    token: '',
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
})
