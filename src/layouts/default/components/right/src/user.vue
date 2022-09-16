<script lang="tsx">
import { DropdownOption } from 'naive-ui'
import useImg from '@/assets/images/user.png'
import { userOptions } from './config'
import { useProfileStore } from '@/pinia/modules/user'
export default defineComponent({
  name: 'User',
  setup() {
    const { useName } = storeToRefs(useProfileStore())
    return () => (
      <>
        <div class={'mr-14px h-1/1 flex items-center cursor-pointer'}>
          <NDropdown
            options={userOptions}
            class={'inp-out'}
            on-select={(key: string | number, option: DropdownOption) =>
              (option as any).fn(key, option)
            }
          >
            <div class={'flex justify-center items-center  h-1/1'}>
              <img src={useImg} class={'w-26px h-26px rounded-1/1 mr-10px'} />
              <span>{useName.value}</span>
            </div>
          </NDropdown>
        </div>
      </>
    )
  },
})
</script>
