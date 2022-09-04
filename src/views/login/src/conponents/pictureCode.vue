<script lang="tsx">
import { getPicValidateCode } from '@/api'

export default defineComponent({
  name: 'UsePictureCode',
  props: {
    value: {
      type: [String],
      default: '',
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const picCode = ref<string>('')
    const getPicCode = async () => {
      picCode.value = ''
      let { data } = await getPicValidateCode()
      picCode.value = data.img
    }
    onMounted(() => {
      getPicCode()
    })
    return () => (
      <NFormItemRow path="pictureCode">
        <NInput
          class="w-100px"
          value={props.value}
          onInput={(ev: any) => emit('update:value', ev)}
          show-password-on="click"
          placeholder="图片验证码"
        />
        <div class="w-130px h-1/1 ml-10px">
          {picCode.value ? (
            <img
              src={picCode.value}
              alt=""
              class={['cursor-pointer', 'w-1/1 h-1/1']}
              onClick={() => getPicCode()}
            />
          ) : (
            <n-skeleton sharp={false} size="medium" />
          )}
        </div>
      </NFormItemRow>
    )
  },
})
</script>

<style scoped></style>
