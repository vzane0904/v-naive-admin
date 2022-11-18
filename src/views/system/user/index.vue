<template>
  <Content>
    <template v-slot:header> 用户管理 </template>
    <div>
      <NButton @click="run">刷新</NButton>
      <NButton @click="showModal = true">新增用户</NButton>
      <NDataTable
        :loading="loading"
        :columns="columns"
        :data="tableData.list"
        :bordered="false"
      />
    </div>
    <AddModal v-model:showModal="showModal" @refresh="run" />
    <Form />
  </Content>
</template>

<script lang="tsx" setup>
import { Api } from '@/api/Api'
import { useHttp } from '@/hooks/useHttp'
import { DataTableColumns, useDialog } from 'naive-ui'
import AddModal from './src/addModal.vue'
import { NButton } from 'naive-ui'
import { createNotification } from '@/utils/message'
import { Form } from '@/components/Form/index'
const dialog = useDialog()
type TList = {
  state: number
  title: string
  length: string
}
const showModal = ref(false)
const tableData = reactive({
  list: [],
  count: 0,
})
const { run, data, loading } = useHttp({
  Api: Api.getUserList,
  methods: 'get',
})
const del = (row: { title?: string; length?: string; id?: any }) => {
  dialog.warning({
    title: '删除',
    content: '确定删除当前数据吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: async () => {
      const { run: sendDel, err: delUserErr } = useHttp({
        Api: Api.deleteUser + row.id,
        methods: 'delete',
      })
      await sendDel()
      if (!delUserErr.value) {
        createNotification({
          title: '成功',
          content: '删除用户成功',
        })
        run()
      }
    },
    onNegativeClick: () => {},
  })
}
const columns: DataTableColumns<TList> = [
  {
    title: 'id',
    key: 'id',
  },
  {
    title: '名称',
    key: 'name',
  },
  {
    title: '用户名',
    key: 'userName',
  },
  {
    title: '手机号',
    key: 'phone',
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
    title: '邮箱',
    key: 'email',
  },
  {
    title: '创建时间',
    key: 'createDate',
  },
  {
    title: '操作',
    key: 'actions',
    render(row: {
      no?: number | undefined
      title?: string | undefined
      length?: string | undefined
      id?: any
    }) {
      return (
        <NButton strong tertiary onClick={() => del(row)}>
          删除
        </NButton>
      )
    },
  },
]

watch(data, () => {
  tableData.list = unref(data).list
  tableData.count = unref(data).count
})
onMounted(async () => {
  await run()
})
</script>

<style scoped></style>
