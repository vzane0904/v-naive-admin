import { App } from 'vue'

const hasPermission = {
  install(Vue: App<Element>) {
    //自定义指令v-has：
    Vue.directive('has', {
      //   mounted(el, binding, vnode) {
      //     if (!checkPermission(binding.value)) {
      //       const tooltipNode = vnode.children.find(
      //         (childrenCmpt) => childrenCmpt.component?.type.name == 'ElTooltip',
      //       )
      //       tooltipNode.component.props.disabled = false
      //       el.querySelector('button').setAttribute('disabled', true)
      //     }
      //   },
      // 在绑定元素的 attribute 前
      // 或事件监听器应用前调用
      created(_el, _binding, _vnode, _prevVnode) {
        // console.log('created')
        // 下面会介绍各个参数的细节
      },
      // 在元素被插入到 DOM 前调用
      beforeMount(_el, _binding, _vnode, _prevVnode) {
        // console.log('beforeMount')
      },
      // 在绑定元素的父组件
      // 及他自己的所有子节点都挂载完成后调用
      mounted(_el, _binding, _vnode, _prevVnode) {
        // console.log('mounted')
      },
      // 绑定元素的父组件更新前调用
      beforeUpdate(_el, _binding, _vnode, _prevVnode) {
        // console.log('beforeUpdate')
      },
      // 在绑定元素的父组件
      // 及他自己的所有子节点都更新后调用
      updated(_el, _binding, _vnode, _prevVnode) {
        // console.log('updated')
      },
      // 绑定元素的父组件卸载前调用
      beforeUnmount(_el, _binding, _vnode, _prevVnode) {
        // console.log('beforeUnmount')
      },
      // 绑定元素的父组件卸载后调用
      unmounted(_el, _binding, _vnode, _prevVnode) {
        // console.log('unmounted')
      },
    })
    //权限检查方法
    // function checkPermission(value: string | []): boolean {
    //   //   let isExist = false
    //   //   const userlogin = JSON.parse(sessionStorage.getItem('userlogin') || '[]')
    //   //   const buttonArr = userlogin.haspermissions
    //   //   //判断是否按钮有权限
    //   //   if (buttonArr.includes(value)) {
    //   //     isExist = true
    //   //   }
    //   //   return isExist
    //   console.log(value)
    //   return true
    // }
  },
}
export default hasPermission
