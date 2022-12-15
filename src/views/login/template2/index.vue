<script lang="tsx">
import login2Img from '@/assets/images/login2Img.png'
import SwitchTemplate from '../src/components/switchTemplate.vue'
import UserNameLogin from '../src/components/userNameLogin.vue'
import { createMsg } from '@/utils/message'
import { getEnv } from '@/hooks/useEnv'
import SvgIcon from '@/components/SvgIcon/index.vue'
export default defineComponent({
  name: 'Login2',
  components: { SwitchTemplate, UserNameLogin },
  setup() {
    const title = getEnv('VITE_APP_TITLE')
    const loading = ref(false)
    const ElRef = ref<Element>()
    return () => (
      <div class="loginBox w-1/1 h-1/1 flex">
        <div
          class="leftBox w-2/3 bg-blue-400 flex items-center justify-center"
          style={{ backgroundColor: '#4393fa' }}
        >
          <div class="absolute left-0 top-0 h-76px max-w-1/1 w-800px titBox mt-100px pl-20 box-border flex items-center">
            <SvgIcon name="logo-icon" size={40} />
            <b class="text-28px text-green-700 text-20px font-900 text-shadow-sm">
              {title}
            </b>
          </div>
          <img src={login2Img} alt="" />
        </div>
        <div class="loginInfoBox w-1/3 flex items-center justify-center relative overflow-hidden">
          <div class="contentBox">
            <SvgIcon name="login_fast" class="!w-1/1 !h-56px -ml-10px" />
            <div>
              <NTabs
                class="card-tabs"
                default-value="signin"
                justify-content="space-evenly"
                size="large"
                animated
                style="margin: 0 -4px"
                pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
              >
                <NTabPane name="signin" tab="账号密码登录">
                  <UserNameLogin ref={ElRef} />
                  <NButton
                    type="info"
                    block
                    loading={loading.value}
                    onClick={(e: MouseEvent) => {
                      loading.value = true
                      e.preventDefault()
                      ;(ElRef.value as any).subMit(
                        () => {
                          console.log('ok')
                        },
                        () => {
                          loading.value = false
                        },
                      )
                    }}
                  >
                    登录
                  </NButton>
                </NTabPane>
                <NTabPane name="signup" tab="注册">
                  <NForm label-placement="left" ref={ElRef}>
                    <NFormItemRow>
                      <NInput placeholder="请输入手机号"></NInput>
                    </NFormItemRow>
                    <NFormItemRow>
                      <NInput placeholder="请输入短信验证码"></NInput>
                      <NButton type="info" strong class="ml-20px w-120px">
                        获取验证码
                      </NButton>
                    </NFormItemRow>
                  </NForm>
                  <NButton
                    type="info"
                    block
                    onClick={(e: MouseEvent) => {
                      e.preventDefault()
                      createMsg('正在开发', { type: 'warning' })
                    }}
                  >
                    登录
                  </NButton>
                </NTabPane>
              </NTabs>
              <SwitchTemplate />
            </div>
          </div>
        </div>
      </div>
    )
  },
})
</script>
<style lang="less" scoped>
.titBox {
  background: linear-gradient(
    270deg,
    rgba(67, 147, 250, 0.5),
    rgba(133, 182, 252, 0.5)
  );
}
</style>
