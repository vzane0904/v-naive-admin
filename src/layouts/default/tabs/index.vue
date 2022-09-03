<script lang="tsx">
import { NTabPane, NTabs } from 'naive-ui'
import { defineComponent } from 'vue'
import { Suffix } from './src/suffix'
import Icon from '@/components/Icon/index.vue'
import { useRouter } from 'vue-router'
import useTabs from './src/utils'
import { routeStore } from '@/pinia/modules/routeStore'
import { themeStore } from '@/pinia/theme'
import { refStore } from '@/pinia/ref'
import { configStore } from '@/pinia/config'
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
                  name={item.name}
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
                              let ev: any = e || window.event
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
