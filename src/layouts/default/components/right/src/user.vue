<script lang="tsx">
import { DropdownOption } from 'naive-ui'
import { defineComponent } from 'vue'
import useImg from '@/assets/images/user.png'
import { UserOptions } from './config'
export default defineComponent({
  name: 'User',
  setup() {
    const title = import.meta.env.VITE_APP_TITLE
    return () => (
      <>
        <div class={'mr-14px h-1/1 flex items-center cursor-pointer'}>
          <NDropdown
            options={UserOptions}
            class={'inp-out'}
            on-select={(key: string | number, option: DropdownOption) => {
              option.fn(key, option)
            }}
          >
            <div class={'flex justify-center items-center  h-1/1'}>
              <img src={useImg} class={'w-26px h-26px rounded-1/1 mr-10px'} />
              <span>{title}</span>
            </div>
          </NDropdown>
        </div>
      </>
    )
  },
})
</script>
