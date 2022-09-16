<script lang="tsx">
import PageTheme from './PageTheme.vue'
import PageFun from './PageFun.vue'
import PageShow from './PageShow.vue'
import PageAnimation from './PageAnimation.vue'
import { themeStore } from '@/pinia/modules/theme'
import { colorFFF } from '@/config'
import { useClipboard } from '@vueuse/core'
import { createModal } from '@/utils/message'
import { useOptions } from './copyOptions'
export default defineComponent({
  name: 'OpenDrawer',
  emits: ['refCallBack'],
  setup(_props, { emit }) {
    const active = ref<boolean>(false)
    const store = themeStore()
    onMounted(() => emit('refCallBack', { active }))
    const source = useOptions()
    // text
    const { copy, copied, isSupported } = useClipboard({ source })
    watch(
      () => store.theme,
      (state) => {
        if (state) {
          store.$patch({
            headerColor: '#212121', //顶部颜色
            siderColor: '#24292e', //左侧菜单颜色
          })
        } else {
          store.$patch({
            headerColor: colorFFF, //顶部颜色
            siderColor: '#24292e', //左侧菜单颜色
          })
        }
      },
    )
    watch(copied, () => {
      if (!isSupported) {
        createModal({
          type: 'error',
          title: '操作失败',
          content: '当前浏览器不支持 或 进制使用 剪切板API',
        })
        return false
      }
      if (copied.value) {
        createModal({
          type: 'success',
          title: '操作成功',
          content: '复制成功,请到 src/config/settings.ts 中修改配置！',
        })
      }
    })
    return () => (
      <>
        <NDrawer v-model:show={active.value} width={'330px'}>
          <NDrawerContent
            closable={true}
            v-slots={{
              header: () => <div>项目配置</div>,
            }}
          >
            <NDivider title-placement="center">主题</NDivider>
            <div class={'flex justify-center'}>
              <NSwitch
                size="medium"
                defaultValue={store.theme}
                onUpdateValue={(v) => (store.theme = v)}
                v-slots={{
                  icon: () => <div>🤔</div>,
                }}
              ></NSwitch>
            </div>
            {/* 导航模式 / 主题颜色 */}
            <PageTheme />
            {/* 界面功能 */}
            <PageFun />
            {/* 界面显示 */}
            <PageShow />
            {/* 动画 */}
            <PageAnimation />
            <NDivider title-placement="center"></NDivider>
            <div class={'flex flex-col'}>
              <NButton
                type="primary"
                class={'mb-10px copy-btn'}
                onClick={() => copy()}
                disabled={copied.value}
              >
                拷贝
              </NButton>
              <NButton type="warning" class={'mb-10px'}>
                重置
              </NButton>
              <NButton type="error" class={'mb-10px'}>
                清空并返回登录页
              </NButton>
            </div>
          </NDrawerContent>
        </NDrawer>
      </>
    )
  },
})
</script>

<style lang="less" scoped></style>
