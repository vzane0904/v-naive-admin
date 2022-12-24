<template>
  <Content>
    <template v-slot:header> 菜单管理 </template>
    <BasicTable @register="register">
      <!-- <template v-slot:title>
        <div>title插槽</div>
      </template> -->
      <template v-slot:toolbar>
        <NButton type="info" @click="openModal()">新增菜单</NButton>
      </template>
    </BasicTable>
    <AddModal
      v-model:showModal="showModal"
      v-model:type="modelType"
      :info="editInfo"
      :parentId="parentId"
      @refresh="methods.reload"
    />
  </Content>
</template>
<script lang="tsx" setup>
import { Api } from '@/api/Api'
import { useHttp } from '@/hooks/useHttp'
import { DataTableColumns, useDialog } from 'naive-ui'
import AddModal from './src/AddModal.vue'
import { createNotification } from '@/utils/message'
import { BasicTable, useTable } from '@/components/Table'
import { getMenuList } from '@/api'
import { IMenuList } from './type'
import Icon from '@/components/Icon/index.vue'
const userRouter = useRouter()
const dialog = useDialog()
const showModal = ref(false)
const editInfo = ref<IMenuList | null>(null)
const modelType = ref<'add' | 'edit'>('add')
const parentId = ref<number>(0)
const del = (row: { title?: string; length?: string; id?: any }) => {
  dialog.warning({
    title: '删除',
    content: '确定删除当前数据吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: async () => {
      const { run: sendDel, err: delUserErr } = useHttp({
        Api: Api.ApiDelMenu + row.id,
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
const openModal = function () {
  showModal.value = true
  parentId.value = 0
  modelType.value = 'add'
}
const edit = function (val: IMenuList) {
  modelType.value = 'edit'
  editInfo.value = val
  showModal.value = true
}
const columns: DataTableColumns<IMenuList> = [
  {
    title: '名称',
    key: 'title',
  },
  {
    title: '类型',
    key: 'type',
    width: 80,
    render(row) {
      return (
        // eslint-disable-next-line no-use-before-define
        <>
          {row.type === 1 && (
            <n-tag round type="info">
              目录
            </n-tag>
          )}
          {row.type === 2 && (
            <n-tag round type="success">
              菜单
            </n-tag>
          )}
          {row.type === 3 && (
            <n-tag round type="error">
              权限
            </n-tag>
          )}
        </>
      )
    },
  },
  {
    title: 'icon',
    key: 'icon',
    width: 70,
    render(row) {
      return <Icon name={row.icon || ''} size={20} />
    },
  },
  {
    title: '路由地址',
    key: 'path',
    render(row) {
      return row.type === 2 ? (
        <n-button
          text
          tag="a"
          type="primary"
          onClick={() => userRouter.push(row.path)}
        >
          {row.path}
        </n-button>
      ) : (
        <div></div>
        // {row.path}
      )
    },
  },
  {
    title: '权限标识',
    key: 'path',

    render(row) {
      return row.type === 3 ? <div>{row.path}</div> : null
    },
  },
  {
    title: '排序',
    key: 'orderNo',
    width: 80,
  },
  {
    title: '文件地址',
    key: 'component',
  },
  {
    title: '创建时间',
    key: 'createDate',
  },
  {
    title: '操作',
    key: 'actions',
    width: 200,
    render(row) {
      return (
        // eslint-disable-next-line no-use-before-define
        <div class="flex justify-between">
          {row.type !== 3 ? (
            <NButton
              strong
              secondary
              type="success"
              onclick={() => {
                showModal.value = true
                parentId.value = row.id!
              }}
            >
              新增
            </NButton>
          ) : null}

          <NButton strong secondary type="info" onClick={() => edit(row)}>
            修改
          </NButton>
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
  api: getMenuList,
  immediate: true,
  additionalParams: { name: 'xxx' },
  showIndexColumText: ' ',
  pageSetting: {
    // pageIndexField: 'xx',
    // pageSizeField: 'aa',
  },
  dataTableProps: {
    singleLine: false,
    rowKey: (row: IMenuList) => row.id || 0,
    size: 'medium',
    loading: false,
    bordered: true,
  },
})
</script>

<style scoped></style>
