<script lang="tsx">
import login2Img from '@/assets/images/login2Img.png'
import logo from '@/assets/images/title.png'
import loginLogo from '@/assets/images/login_logo.png'
import { GlassesOutline, Glasses } from '@vicons/ionicons5'
import SwitchTemplate from '../src/components/switchTemplate.vue'
export default defineComponent({
  name: 'Login2',
  components: { SwitchTemplate },
  setup() {
    const { pkg } = __APP_INFO__
    return () => (
      <div class="loginBox w-1/1 h-1/1 flex">
        <div
          class="leftBox w-2/3 bg-blue-400 flex items-center justify-center"
          style={{ backgroundColor: '#4393fa' }}
        >
          <div class="absolute left-0 top-0 h-76px max-w-1/1 w-800px titBox mt-100px pl-20 box-border flex items-center">
            <img src={logo} alt="" class="h-40px" />
          </div>
          <img src={login2Img} alt="" />
        </div>
        <div class="loginInfoBox w-1/3 flex items-center justify-center relative overflow-hidden">
          <div
            class="edition absolute top-3 -right-25px px-30px py-4px  text-cool-gray-50 transform rotate-45 select-none"
            style={{ backgroundColor: '#fec12f' }}
          >
            V {pkg.version}
          </div>
          <div class="contentBox">
            <img src={loginLogo} alt="" class="w-400px h-36px" />
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
                  <NForm label-placement="left">
                    <NFormItemRow>
                      <NInput placeholder="请输入账号"></NInput>
                    </NFormItemRow>
                    <NFormItemRow>
                      <NInput
                        type="password"
                        show-password-on="click"
                        placeholder="请输入密码"
                        maxlength={8}
                        v-slots={{
                          'password-visible-icon': () => (
                            <NIcon size={16} component={GlassesOutline} />
                          ),
                          'password-invisible-icon': () => (
                            <NIcon size={16} component={Glasses} />
                          ),
                        }}
                      ></NInput>
                    </NFormItemRow>
                  </NForm>
                  <NButton type="info" block>
                    登录
                  </NButton>
                </NTabPane>
                <NTabPane name="signup" tab="注册">
                  <NForm label-placement="left">
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
                  <NButton type="info" block>
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
