<script lang="tsx">
import { Suffix } from './src/suffix'
import Icon from '@/components/Icon/index.vue'
import useTabs from './src/utils'
import { routeStore } from '@/pinia/modules/routeStore'
import { themeStore } from '@/pinia/modules/theme'
import { refStore } from '@/pinia/modules/ref'
import { configStore } from '@/pinia/modules/config'
import { TabsThemeConfig } from '@/naive'
export default defineComponent({
  name: 'Tabs',
  setup() {
    const store = routeStore()
    const { prefix } = storeToRefs(configStore())
    const router = useRouter()
    const { closeTabs } = useTabs()
    const tabsThemeConfig = computed(() => TabsThemeConfig())
    const { theme } = storeToRefs(themeStore())
    const { setMenuSelect } = refStore()
    return () => (
      <div
        class={'h-30px relative'}
        style={{ borderTop: theme.value ? '' : '1px solid #d9d9d9' }}
      >
        <div
          class="h-1/1"
          style={{
            width: ' calc(100% - (8px / 2))',
          }}
        >
          <NTabs
            value={store.selectMenu}
            type={'card'}
            v-slots={{
              suffix: () => <Suffix />,
            }}
            themeOverrides={tabsThemeConfig.value}
            class={`${prefix.value}-tabs-extra-content`}
          >
            {store.tabs.map((item) => {
              return (
                <NTabPane
                  key={item.name}
                  name={item.path}
                  v-slots={{
                    tab: () => (
                      <div
                        onClick={() => {
                          router.push(item.path)
                          setMenuSelect(item.path)
                        }}
                      >
                        <span>{item.title}</span>
                        {item.isClose ? (
                          <Icon
                            name={'guanbi'}
                            size={14}
                            class="ml-10px mt-0px"
                            onClick={(e: Event | undefined) => {
                              closeTabs(item)
                              const ev: any = e || window.event
                              ev.stopPropagation()
                            }}
                          />
                        ) : null}
                      </div>
                    ),
                  }}
                ></NTabPane>
              )
            })}
          </NTabs>
        </div>
      </div>
    )
  },
})
</script>
<style lang="less" scope>
@prefixCls: ~'@{prefix}';
.@{prefixCls}-tabs{
&-nav{
  height: 100%;
  .v-x-scroll{
  height: 100%;
  }
  &-scroll-content{
  height: 100%;

  }
}
}
</style>
