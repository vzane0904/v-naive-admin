<script lang="tsx">
import { Icon } from '@/components/Icon'
import { themeStore } from '@/pinia/theme'
import { openFullScreen } from '@/utils/fullScreen'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Screen',
  setup() {
    const store = themeStore()
    return () => (
      <div class={'mr-14px'}>
        <Icon
          name={store.isFullScreen ? 'quxiaoquanping_o' : 'quanping_o'}
          class={['cursor-pointer']}
          size={20}
          onClick={() => openFullScreen()}
        />
      </div>
    )
  },
})
</script>
