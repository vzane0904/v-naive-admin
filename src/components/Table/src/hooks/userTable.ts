import { BasicTableProps, ITableExample } from '../type/table'
import lodash from 'lodash-es'
import config from './default.config'
const useTable = function (props: BasicTableProps) {
  const baseConfig = lodash.merge(lodash.cloneDeep(config), props)
  if (!getCurrentInstance()) {
    throw new Error(
      'useForm() can only be used inside setup() or functional components!',
    )
  }
  // 事件处理
  const desc = ref<ITableExample>()
  // 响应示数据
  const propsValue = ref<BasicTableProps>()
  const register = function (methodsProps: ITableExample) {
    desc.value = methodsProps
    propsValue.value = methodsProps.setTableProps(baseConfig)
  }
  const setLoading = (value: boolean) =>
    (unref(propsValue)!.dataTableProps!.loading = value)
  //   设置所有配置
  const setTableProps = (config: BasicTableProps) =>
    unref(desc)!.setTableProps(config)
  const reload = () => desc.value?.reload()
  const getDataSource = () => unref(propsValue)!.data as []
  const methods: ITableExample = {
    setTableProps,
    setLoading,
    reload,
    getDataSource,
  }
  return { register, methods }
}
export default useTable
