<script lang="tsx">
import Icon from '@/components/Icon/index.vue'
import { themeStore } from '@/pinia/modules/theme'
import { LangOptions } from '@/config'
import { useI18n } from '@/locales/useLocal'
export default defineComponent({
  name: 'Language',
  setup() {
    const store = themeStore()
    const { setLocal } = useI18n()
    return () => (
      <>
        <div
          class={
            'mr-14px h-1/1 flex justify-center items-center cursor-pointer'
          }
        >
          <NDropdown
            trigger="click"
            v-model:value={store.language}
            options={LangOptions}
            onSelect={(k) => setLocal(k)}
          >
            <div class={'flex justify-center items-center h-1/1'}>
              <Icon name="zhongwenyuyan" size={20} />
            </div>
          </NDropdown>
        </div>
      </>
    )
  },
})
</script>
