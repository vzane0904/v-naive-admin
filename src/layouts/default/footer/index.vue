<script lang="tsx">
import { defineComponent } from 'vue'
import { themeStore } from '@/pinia/theme'
import { NLayoutFooter } from 'naive-ui'
// import publicIcon from '@/assets/images/public.png'
export default defineComponent({
  name: 'LayoutFooter',
  setup() {
    const store = themeStore()
    return () =>
      store.showFooter ? (
        <NLayoutFooter
          class={[`h-${store.footerHeight}px flex items-center justify-center`]}
          style={{
            color: '#8590a6',
          }}
        >
          <a class={'pr-20px'}>联系我们</a>
          <span class={'pr-20px cursor-pointer'}>© 2022-Present mmxxn.cn</span>
          {/* <div>
            <img src={publicIcon} alt="" srcset="" />
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2021005460">京公网安备 11010802020088 号</a>
          </div> */}
          <a target="_blank" href="https://beian.miit.gov.cn/">
            豫 ICP 备 2021005460 号 - 1
          </a>
        </NLayoutFooter>
      ) : (
        <div></div>
      )
  },
})
</script>
<style lang="less" scoped>
a {
  color: inherit;
  cursor: pointer;
}
a:hover {
  color: #175199;
  text-decoration: none;
}
// a:visited {
//   color: #00ff00;
//   text-decoration: none;
// }
// a:link {
//   color: #ff0000;
//   text-decoration: underline;
// }
a:active {
  color: #175199;
  text-decoration: none;
}
</style>
