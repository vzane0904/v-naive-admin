<!-- eslint-disable no-use-before-define -->
<template>
  <Content>
    <template v-slot:header> 角色管理</template>
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
const columns: DataTableColumns<TList> = [
  {
    title: 'id',
    key: 'id',
    width: 80,
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
    width: 100,
    render(row) {
      return (
        <NSwitch
          value={row.state}
          checked-value={1}
          unchecked-value={0}
          // eslint-disable-next-line no-use-before-define
          onUpdateValue={(value: boolean) => checkState(row, value)}
        />
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
    width: 150,
    render(row) {
      return (
        <div class="flex justify-between">
          {/* eslint-disable-next-line no-use-before-define */}
          <NButton strong secondary type="info" onClick={() => edit(row)}>
            修改
          </NButton>
          {/* eslint-disable-next-line no-use-before-define */}
          <NButton strong secondary type="error" onClick={() => del(row)}>
            删除
          </NButton>
        </div>
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
    bordered: true,
    bottomBordered: true,
  },
})
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
        methods.reload()
      }
    },
    onNegativeClick: () => {},
  })
}
const edit = function (val: TList) {
  modelType.value = 'edit'
  editInfo.value = val
  showModal.value = true
}

const checkState = async function (row: TList, value: boolean) {
  // 新增角色
  const { run, err } = useHttp({
    Api: Api.ApiUpdateRole,
    methods: 'patch',
    data: {
      ...row,
      state: value,
    },
  })
  await methods!.setLoading(true)
  await run()
  if (!err.value) {
    createNotification({
      title: '成功',
      content: '角色状态修改成功',
    })
    await methods.reload()
  }
}
onMounted(async () => {})
</script>

<style scoped></style>
