import { BasicTableProps } from '../type/table'

const config: Partial<BasicTableProps> = {
  immediate: true,
  data: [],
  columns: [],
  tableSettings: {
    showHeader: true,
  },
  dataTableProps: {
    flexHeight: true,
    size: 'medium',
    remote: true,
    bordered: true,
    bottomBordered: true,
  },
  pageSetting: {
    listField: 'list',
    pageSizeField: 'pageSize',
    pageIndexField: 'pageIndex',
    pageTotalField: 'count',
  },
  pagination: {
    defaultPage: 1,
    defaultPageSize: 10,
    pageSizes: [10, 20, 50, 100],
    showSizePicker: true,
    showQuickJumper: true,
  },
  showIndexColum: true,
  showIndexColumText: '序号',
}
export default config
