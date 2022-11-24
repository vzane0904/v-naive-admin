<template>
  <Content>
    <template v-slot:header> 用户管理 </template>
    <BasicTable :columns="columns" @register="register">
      <!-- <template v-slot:title>
        <div>title插槽</div>
      </template> -->
      <template v-slot:toolbar>
        <NButton type="info" @click="showModal = true">新增用户</NButton>
      </template>
    </BasicTable>
    <AddModal v-model:showModal="showModal" @refresh="methods.reload" />
  </Content>
</template>
<script lang="tsx" setup>
import { Api } from '@/api/Api'
import { useHttp } from '@/hooks/useHttp'
import { DataTableColumns, useDialog } from 'naive-ui'
import AddModal from './src/addModal.vue'
import { createNotification } from '@/utils/message'
import { BasicTable, useTable } from '@/components/Table'
import { getUserList } from '@/api'

const dialog = useDialog()
type TList = {
  state: number
  title: string
  length: string
}
const showModal = ref(false)

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
    width: 150,
    render(row: {
      no?: number | undefined
      title?: string | undefined
      length?: string | undefined
      id?: any
    }) {
      return (
        // eslint-disable-next-line no-use-before-define
        <NButton strong tertiary onClick={() => del(row)}>
          删除
        </NButton>
      )
    },
  },
]
const { register, methods } = useTable({
  columns,
  // title: () => 'xxxx',
  api: getUserList,
  immediate: true,
  additionalParams: { name: 'xxx' },
  pageSetting: {
    // pageIndexField: 'xx',
    // pageSizeField: 'aa',
  },
  data: [],
  // afterFetch: (value) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(value)
  //     }, 2000)
  //   })
  // },
  // beforeFetch: (val) => {
  //   return new Promise((resolve) => {
  //     console.log('val', val)

  //     setTimeout(() => {
  //       resolve({ ...val, name: '测试返回结果' })
  //     }, 2000)
  //   })
  // },
  dataTableProps: {
    size: 'medium',
    loading: false,
    bordered: false,
  },
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
        methods.reload()
      }
    },
    onNegativeClick: () => {},
  })
}
onMounted(async () => {})
</script>

<style scoped></style>
