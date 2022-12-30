import { DataTableColumns, DataTableProps, PaginationProps } from 'naive-ui'
import { Recordable } from 'vite-plugin-mock'
export interface TableSettings {
  showHeader?: boolean //header区域是否显示
  showRefresh?: boolean //刷新按钮
  size?: boolean //显示调整表格大小按钮
}
export interface IPageSetting {
  listField?: string //请求结果数据对应参数名
  pageSizeField?: string //一页多少条对应字段
  pageIndexField?: string //当前第几页对应字段
  pageTotalField?: string //总数据对应字段
  showPagination?: boolean //是否分页
}
export interface BasicTableProps {
  //   title?: VNodeChild | JSX.Element | string | ((data: Recordable) => string)
  title?: string | ((data?: Recordable) => string)
  dataTableProps?: Omit<DataTableProps, 'data' | 'columns'>
  data?: Record<string, any>[]
  api?: (...arg: any) => Promise<any>
  tableSettings?: TableSettings
  beforeFetch?: (value: any) => Promise<any> //请求之前对参数进行处理
  afterFetch?: (value: any) => Promise<any> //请求之后对返回值进行处理
  immediate?: boolean //组件加载完成是否立即请求数据,api必须存在
  additionalParams?: Record<string, any> //额外参数
  columns: DataTableColumns<any>
  showIndexColum?: boolean // 是否显示序号
  showIndexColumText?: string // 序号文案
  pageSetting?: IPageSetting
  pagination?: PaginationProps
}
export interface ITableExample {
  setTableProps(desc: Partial<BasicTableProps>): BasicTableProps //设置表格参数
  setLoading(value: Boolean): void
  reload(): void // 刷新表格
  getDataSource: <T = Record<string, any>>() => T[] // 获取数据
}
