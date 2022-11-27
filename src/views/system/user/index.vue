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
    <AddModal
      v-model:showModal="showModal"
      @refresh="methods.reload"
      v-model:type="modelType"
      :info="editInfo"
    />
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
import { IUserList } from './type'

const dialog = useDialog()
const showModal = ref(false)
const editInfo = ref<IUserList | null>(null)
const modelType = ref<'add' | 'edit'>('add')
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
        // eslint-disable-next-line no-use-before-define
        methods.reload()
      }
    },
    onNegativeClick: () => {},
  })
}
const edit = function (val: IUserList) {
  console.log(val)
  modelType.value = 'edit'
  editInfo.value = val
  showModal.value = true
}
const columns: DataTableColumns<IUserList> = [
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
    title: '角色',
    key: 'roleName',
    render(row) {
      // return <div>{row.roleName.join(',')}</div>
      //   <n-tag :bordered="false" type="info">
      //   哪里都是你
      // </n-tag>
      return (
        <>
          {row.roleName.map((item) => (
            <n-tag bordered={false} type="info" class="mr-3px">
              {item}
            </n-tag>
          ))}
        </>
      )
    },
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
    render(row) {
      return (
        // eslint-disable-next-line no-use-before-define
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

onMounted(async () => {})
</script>

<style scoped></style>
