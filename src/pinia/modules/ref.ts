import { MenuInst } from 'naive-ui'
import { defineStore } from 'pinia'
export const refStore = defineStore({
  id: 'refStore',
  state: () => ({
    menuRef: null as MenuInst | null,
  }),
  actions: {
    /**
     @param setMenuSelect 设置左侧菜单选中
     * **/
    setMenuSelect(val: string) {
      this.menuRef?.showOption(val)
    },
  },
})
