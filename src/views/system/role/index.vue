<template>
  <Content>
    <template v-slot:header> 角色管理{{ modelType }} </template>
    <BasicTable @register="register">
      <!-- <template v-slot:title>
        <div>title插槽</div>
      </template> -->
      <template v-slot:toolbar>
        <NButton type="info" @click="showModal = true">新增角色</NButton>
      </template>
    </BasicTable>
    <AddModal
      v-model:showModal="showModal"
      v-model:type="modelType"
      :info="editInfo"
      @refresh="methods.reload"
    />
  </Content>
</template>

<script lang="tsx" setup>
import { Api } from '@/api/Api'
import { useHttp } from '@/hooks/useHttp'
import { DataTableColumns, useDialog } from 'naive-ui'
import AddModal from './src/AddModal.vue'
import { NButton } from 'naive-ui'
import { createNotification } from '@/utils/message'
import { useTable, BasicTable } from '@/components/Table'
import { getRoleList } from '@/api'
const dialog = useDialog()
type TList = {
  state: number
  title: string
  length: string
}
const editInfo = ref({})
const modelType = ref<'add' | 'edit'>('add')
const showModal = ref(false)
const del = (row: {
  no?: number
  title?: string
  length?: string
  id?: any
}) => {
  dialog.warning({
    title: '删除',
    content: '确定删除当前数据吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: async () => {
      const { run: sendDel, err: delUserErr } = useHttp({
        Api: Api.deleteRole + row.id,
        methods: 'delete',
      })
      await sendDel()
      if (!delUserErr.value) {
        createNotification({
          title: '成功',
          content: '删除角色成功',
        })
        // eslint-disable-next-line no-use-before-define
        methods.reload()
      }
    },
    onNegativeClick: () => {},
  })
}
const edit = function (val: TList) {
  console.log(val)
  modelType.value = 'edit'
  editInfo.value = val
  showModal.value = true
}
const columns: DataTableColumns<TList> = [
  {
    title: 'id',
    key: 'id',
  },
  {
    title: '角色名称',
    key: 'name',
  },
  {
    title: '角色标识',
    key: 'label',
  },
  {
    title: '备注',
    key: 'remark',
  },
  {
    title: '状态',
    key: 'state',
    render(row) {
      return (
        <NTag bordered={false} type={row.state === 1 ? 'success' : 'error'}>
          {row.state === 1 ? '正常' : '冻结'}
        </NTag>
      )
    },
  },
  {
    title: '创建时间',
    key: 'createDate',
  },
  {
    title: '操作',
    key: 'actions',
    render(row) {
      return (
        <>
          <NButton strong tertiary onClick={() => del(row)}>
            删除
          </NButton>
          <NButton strong tertiary onClick={() => edit(row)}>
            修改
          </NButton>
        </>
      )
    },
  },
]
const { register, methods } = useTable({
  columns,
  // title: () => 'xxxx',
  api: getRoleList,
  immediate: true,
  additionalParams: { name: 'xxx' },
  pageSetting: {
    // pageIndexField: 'xx',
    // pageSizeField: 'aa',
  },
  dataTableProps: {
    size: 'medium',
    loading: false,
    bordered: false,
  },
})
onMounted(async () => {})
</script>

<style scoped></style>
