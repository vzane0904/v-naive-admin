<script lang="tsx">
import { configStore } from '@/pinia/modules/config'
import { BasicTableProps } from './type/table'
import TableHeader from './components/TableHeader.vue'
import lodash from 'lodash-es'
import { useAfterFetch } from './hooks/useFetch'
import { DataTableProps } from 'naive-ui'
export default defineComponent({
  name: 'BasicTable',
  components: {
    TableHeader,
  },
  emits: ['register'],
  setup(props, { attrs, slots, emit }) {
    const { prefix } = storeToRefs(configStore())
    const wrapper = '-table-wrapper'
    const tableClass = ref(prefix.value + wrapper)
    const propsValue = ref<BasicTableProps>()
    const data = computed(() => unref(propsValue)?.data)
    // 合并attrs 及 use配置项中关于Table的配置
    // 列数据
    const columns = computed(() => {
      if (unref(propsValue)?.showIndexColum) {
        const serialNo = [
          {
            title: unref(propsValue)!.showIndexColumText,
            key: '',
            width: 80,
            render(row: any, index: number) {
              return <div>{index + 1}</div>
            },
          },
        ]
        return [...serialNo, ...(propsValue.value?.columns || [])]
      }
      return propsValue.value?.columns || []
    })
    const loading = computed(() => unref(propsValue)?.dataTableProps?.loading)
    const setTableProps = (optionsProps: BasicTableProps) => {
      propsValue.value = {
        ...lodash.merge(propsValue.value, optionsProps),
      }
      return unref(propsValue)
    }
    // 触发请求
    const immediate = async () => {
      const {
        api,
        afterFetch,
        beforeFetch,
        additionalParams,
        pagination,
        pageSetting,
        dataTableProps,
      } = unref(propsValue)!
      dataTableProps!.loading = true
      const { pageSizeField, pageIndexField, listField, pageTotalField } =
        pageSetting!
      try {
        let params = {
          ...(additionalParams ?? {}),
          [pageSizeField!]: pagination!.pageSize || pagination!.defaultPageSize,
          [pageIndexField!]: pagination!.page || pagination!.defaultPage,
        }
        if (beforeFetch) {
          params = await beforeFetch(params)
        }
        const res = await api!(params)
        const data = res[listField!]
        if (!data) {
          console.warn(
            `获取接口数据为 ${typeof data} 类型,请检查 listField 字段是否正确`,
          )
        } else if (afterFetch) {
          const result = await useAfterFetch(unref(propsValue)!, data)
          unref(propsValue)!.data = result
        } else {
          unref(propsValue)!.data = data
        }
        // 总条数
        pagination!.itemCount = res[pageTotalField!]
      } catch (error) {
        console.log('请求失败', error)
      }
      dataTableProps!.loading = false
    }
    const reload = () => immediate()
    const Methods = {
      setTableProps,
      reload,
    }
    const mergeAttrs = computed(() => {
      if (unref(propsValue) && unref(propsValue)?.dataTableProps) {
        return lodash.merge({}, attrs, propsValue.value?.dataTableProps)
      }
      return attrs
    })
    onMounted(() => {
      emit('register', Methods)
      if (propsValue.value?.immediate) {
        if (!propsValue.value?.api) {
          console.warn(
            'If immediate is enabled, please configure Api correctly!',
          )
        } else {
          immediate()
        }
      }
    })
    const title = computed(() =>
      typeof propsValue.value?.title === 'function'
        ? propsValue.value?.title()
        : propsValue.value?.title,
    )
    const mapSlots = {}
    Object.keys(slots).forEach((item) =>
      Reflect.set(mapSlots, item, slots[item]),
    )
    const pagination = computed(() => unref(propsValue)?.pagination || {})
    const headerContent = () => {
      if (propsValue.value?.tableSettings?.showHeader) {
        return (
          <TableHeader
            title={title.value}
            tableClass={tableClass.value}
            v-slots={mapSlots}
            reload={reload}
            size={propsValue.value?.dataTableProps?.size || ''}
            onUpdate:size={(val: Pick<DataTableProps, 'size'>['size']) => {
              unref(propsValue)!.dataTableProps!.size = val
            }}
          ></TableHeader>
        )
      }
    }
    return () => (
      <NSpin show={loading.value} class="h-full">
        <div class={tableClass.value}>
          {headerContent()}
          {propsValue.value?.dataTableProps?.loading}
          <NDataTable
            {...unref(mergeAttrs)}
            columns={columns.value}
            data={data.value}
            pagination={{
              ...pagination.value,
              onChange: async (page: number) => {
                unref(propsValue)!.pagination!.page = page
                await reload()
              },
              onUpdatePageSize: async (pageSize: number) => {
                unref(propsValue)!.pagination!.page = 1
                unref(propsValue)!.pagination!.pageSize = pageSize
                await reload()
              },
            }}
            loading={false}
          />
        </div>
      </NSpin>
    )
  },
})
</script>
<style lang="less" scoped>
@prefixCls: ~'@{prefix}';
:deep(.@{prefixCls}-spin-content) {
  height: 100%;
}
</style>
