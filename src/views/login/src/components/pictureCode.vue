<script lang="tsx">
// import { getPicValidateCode } from '@/api'
import { BaseApi } from '@/api/Api'
import { useHttp } from '@/hooks/useHttp'

export default defineComponent({
  name: 'UsePictureCode',
  props: {
    value: {
      type: [String],
      default: '',
    },
    picId: {
      type: [String],
      default: '',
    },
  },
  emits: ['update:value', 'update:picId'],
  setup(props, { emit, expose }) {
    const { run, data } = useHttp({
      Api: BaseApi.picCode,
      methods: 'GET',
    })
    watch(data, () => emit('update:picId', unref(data).picId))
    onMounted(async () => {
      await run()
    })
    expose({ run })
    return () => (
      <NFormItemRow path="picCode">
        <NInput
          class="w-100px"
          value={props.value}
          onInput={(ev: any) => emit('update:value', ev)}
          show-password-on="click"
          placeholder="图片验证码"
        />
        <div class="w-130px h-1/1 ml-10px">
          {data.value?.svg ? (
            <div v-html={data.value?.svg || ''} onClick={() => run()}></div>
          ) : (
            <n-skeleton sharp={false} size="medium" onClick={() => run()} />
          )}
        </div>
      </NFormItemRow>
    )
  },
})
</script>

<style scoped></style>
