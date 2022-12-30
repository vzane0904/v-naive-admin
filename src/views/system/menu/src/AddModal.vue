<template>
  <Modal
    @register="register"
    @ok="handleValidateButtonClick"
    @close="close"
    style="width: 50%"
  >
    <div>
      <n-form
        ref="formRef"
        :model="model"
        :rules="rules"
        label-placement="left"
        label-align="right"
        label-width="120"
      >
        <n-grid :cols="24" :x-gap="24">
          <n-form-item-gi :span="24" label="节点类型" path="type">
            <n-radio-group v-model:value="model.type" name="type">
              <n-space>
                <n-radio
                  v-for="song in songs"
                  :key="song.value"
                  :value="song.value"
                >
                  {{ song.label }}
                </n-radio>
              </n-space>
            </n-radio-group>
          </n-form-item-gi>
          <n-form-item-gi
            :span="24"
            label="上级节点"
            path="parentId"
            v-if="model.type !== 1"
          >
            <NTreeSelect
              v-model:value="model.parentId"
              placeholder="请选择上级节点"
              label-field="title"
              key-field="id"
              :options="bindMenuList"
              default-value=""
              clearable
            />
          </n-form-item-gi>
          <!-- 菜单标题 -->
          <n-form-item-gi :span="24" label="标题" path="title">
            <NInput v-model:value="model.title" placeholder="请输入菜单名称" />
          </n-form-item-gi>
          <!-- 唯一标识 => route.name -->
          <!-- <n-form-item-gi :span="24" label="唯一标识" path="name">
            <n-input
              v-model:value="model.name"
              placeholder="请输入名称 route.name"
            />
          </n-form-item-gi> -->
          <!-- 节点名称 => route.name -->
          <!-- <n-form-item-gi :span="24" label="路由名称" path="name">
            <n-input
              v-model:value="model.name"
              placeholder="请输入路由名称 route.name"
            />
          </n-form-item-gi> -->
          <!-- 组件路径 -->
          <template v-if="model.type !== 3">
            <n-form-item-gi :span="24" label="组件地址" path="component">
              <NCascader
                filterable
                :options="data"
                v-model:value="model.component"
                placeholder="请选择组件地址"
                label-field="label"
                default-value=""
                clearable
                check-strategy="child"
                key-field="label"
              />
            </n-form-item-gi>
            <!-- type:2 路由地址  -->
            <n-form-item-gi :span="24" label="路由地址" path="path">
              <NInput
                v-model:value="model.path"
                placeholder="请输入路由地址 如 /test"
              />
            </n-form-item-gi>
            <!-- type:3 权限标识  -->
            <n-form-item-gi :span="24" label="路由重定向" path="redirect">
              <NInput
                v-model:value="model.redirect"
                placeholder="router.redirect"
              />
            </n-form-item-gi>
            <n-form-item-gi
              :span="24"
              label="内嵌地址"
              path="redirect"
              v-if="model.component === 'iframe'"
            >
              <template v-slot:label>
                <NPopover trigger="hover" placement="top">
                  <template v-slot:trigger>
                    <div>
                      <span class="mr-14px">内嵌地址</span>
                      <SvgIcon name="helpEmpty" class="-ml-10px" />
                    </div>
                  </template>
                  <div>
                    1.如果页面需要内嵌展示则需要配置该内嵌地址 <br />
                    2.如果是外链该输入框则不需要设置任何内容,只设置路由地址即可
                  </div>
                </NPopover>
              </template>
              <NInput
                v-model:value="model.iframeSrc"
                placeholder="请输入外链地址"
              />
            </n-form-item-gi>
            <!-- 权限名称 -->
            <!-- <n-form-item-gi :span="24" label="权限名称" path="title">
            <NInput
              v-model:value="model.title"
              placeholder="请输入权限名称 title"
            />
          </n-form-item-gi> -->
            <!-- 重定向 -->
            <!-- <n-form-item-gi :span="24" label="重定向" path="redirect">
            <NInput
              v-model:value="model.redirect"
              placeholder="请输入重定向地址"
            />
          </n-form-item-gi> -->
            <!-- 图标 -->
            <n-form-item-gi :span="24" label="图标" path="icon">
              <NPopover trigger="click" placement="bottom">
                <template v-slot:trigger>
                  <NInput v-model:value="model.icon" placeholder="请输入icon" />
                </template>
                <div class="flex flex-wrap">
                  <div
                    v-for="item in glyphs"
                    @click="model.icon = item.font_class"
                    :key="item.name"
                    :class="[
                      'w-34px h-34px border-1px border-solid mt-4px mr-4px cursor-pointer flex items-center justify-center iconItem',
                      model.icon === item.font_class ? 'active' : '',
                    ]"
                  >
                    <!-- {{ item.name }} -->
                    <Icon :name="item.font_class" :size="20" />
                  </div>
                </div>
              </NPopover>
            </n-form-item-gi>
            <!-- 路由缓存 -->
            <n-form-item-gi :span="6" label="路由缓存" path="keepAlive">
              <n-radio-group
                v-model:value="model.keepAlive"
                name="keepAlive"
                disabled
              >
                <n-space>
                  <n-radio :value="1">开启 </n-radio>
                  <n-radio :value="0">关闭 </n-radio>
                </n-space>
              </n-radio-group>
            </n-form-item-gi>
            <!-- <n-form-item-gi :span="6" label="排序" path="orderNo">
              <NInputNumber
                v-model:value="model.orderNo"
                placeholder="排序号"
                :min="0"
                :max="9999"
              />
            </n-form-item-gi> -->
            <!-- 激活菜单时隐藏tab -->
            <n-form-item-gi :span="6" label="激活菜单时隐藏tab" path="hideTab">
              <n-switch
                v-model:value="model.hideTab"
                :checked-value="true"
                :unchecked-value="false"
              />
            </n-form-item-gi>
          </template>
          <template v-else>
            <n-form-item-gi :span="24" label="权限标识" path="path">
              <NInput v-model:value="model.path" placeholder="请输入权限标识" />
            </n-form-item-gi>
          </template>
          <n-form-item-gi :span="6" label="排序" path="orderNo">
            <NInputNumber
              v-model:value="model.orderNo"
              placeholder="排序号"
              :min="0"
              :max="9999"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="6" label="是否显示" path="state">
            <n-switch
              v-model:value="model.state"
              :checked-value="1"
              :unchecked-value="0"
            />
          </n-form-item-gi>
        </n-grid>
      </n-form>
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import { Api } from '@/api/Api'
import { Modal, useModal } from '@/components/Modal/index'
import { useHttp } from '@/hooks/useHttp'
import { deepPaths } from '@/utils'
import { createNotification } from '@/utils/message'
import { FormInst, FormItemRule, FormRules } from 'naive-ui'
import { IMenuList } from '../type'
import { glyphs } from '@/assets/icon.json'
const initialState = {
  parentId: '',
  type: 1,
  name: '',
  path: '',
  redirect: '',
  disabled: true,
  component: null,
  icon: '',
  title: '',
  hideMenu: false,
  hideTab: false,
  orderNo: 0,
  state: 1,
  keepAlive: 0,
  iframeSrc: '',
}
const bindMenuList = ref<IMenuList[]>([])
const songs = [
  {
    value: 1,
    label: '一级菜单',
  },
  {
    value: 2,
    label: '子菜单',
  },
  {
    value: 3,
    label: '权限',
  },
]
const model = reactive<IMenuList>({
  ...initialState,
})
const emit = defineEmits(['update:showModal', 'refresh', 'update:type'])
const props = withDefaults(
  defineProps<{
    showModal?: boolean
    type?: 'add' | 'edit'
    info?: IMenuList | null
    parentId: number
  }>(),
  {
    showModal: false,
    type: 'add',
  },
)
const formRef = ref<FormInst | null>(null)
const rules: FormRules = {
  name: {
    required: true,
    trigger: ['blur', 'input'],
    message: '名称或标识为必填项',
  },
  title: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入页面标题',
  },
  path: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error(
            model.type === 2 ? '请输入路由地址' : '请输入权限标识',
          )
        }
        return true
      },
      trigger: ['input', 'blur'],
    },
  ],
  component: {
    required: true,
    message: '组件路径必填项',
  },
  state: {
    required: true,
    message: '请设置当前状态',
  },
}
// 扫描文件目录
const findFiles = function findFiles() {
  const files = import.meta.glob([
    '/src/views/**/*.vue',
    // {views,layouts/error}
    // '!**/components',
  ])
  const list: string[] = ['view', 'iframe']
  for (const i in files) {
    if (i.includes('/src/views')) {
      list.push(i.substring(11))
    } else if (i.includes('/src/layouts')) {
      list.push(i.substring(12))
    }
  }
  return deepPaths(list)
}
// 数据列表
const data = ref(findFiles())
const [register, setModal] = useModal({
  title: '新增角色',
  show: props.showModal,
  props: {
    closeOnEsc: true,
  },
})
// 提交 目录
const subMit = function () {
  return new Promise<boolean>(async (resolve) => {
    if (props.type === 'edit') {
      const { run, err } = useHttp({
        Api: Api.ApiUpdateMenu,
        methods: 'patch',
        data: model,
      })
      await run()
      if (!err.value) {
        createNotification({
          title: '成功',
          content: '修改菜单成功',
        })
        emit('update:showModal', false)
        emit('refresh')
      }
      resolve(true)
    } else {
      // 新增角色
      const { run, err } = useHttp({
        Api: Api.ApiAddMenu,
        methods: 'post',
        data: model,
      })
      await run()
      if (!err.value) {
        createNotification({
          title: '成功',
          content: '新增菜单成功',
        })
        emit('update:showModal', false)
        emit('refresh')
      }
      resolve(true)
    }
  })
}
const handleValidateButtonClick = () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      setModal.setModalProps({
        props: {
          loading: true,
        },
      })
      await subMit()
      setModal.setModalProps({
        props: {
          loading: false,
        },
      })
    }
  })
}
const close = function close() {
  emit('update:showModal', false)
  emit('update:type', 'add')
}
const getMenuList = async function () {
  const { run, data, err } = useHttp({
    Api: Api.APiMenuList,
    methods: 'get',
    params: { type: '1,2' },
  })
  await run()
  if (!err.value) {
    bindMenuList.value = data.value.list
  }
}
onMounted(() => {})
watch(
  () => props.showModal,
  (v) => {
    setModal.setModalProps({
      show: props.showModal,
    })
    if (v) {
      if (props.type === 'edit') {
        Object.assign(model, props.info)
      }
      setModal.setModalProps({
        title: props.type === 'add' ? '新增角色' : '修改角色',
      })
      getMenuList()
    } else {
      Object.assign(model, initialState)
    }
  },
)
watch(
  () => props.parentId,
  (val: string | number) => {
    if (val) {
      model.parentId = val
      if (props.type !== 'edit') {
        model.type = 2
      }
    }
  },
)
watch(
  () => model.parentId,
  (val) => {
    if (!val) {
      model.parentId = ''
    }
  },
)
</script>
<style lang="less" scoped>
.iconItem {
  border-color: #e5e7eb;
  &:hover {
    border-color: rgba(9, 96, 189, 1);
  }
}
.iconItem.active {
  border-color: rgba(9, 96, 189, 1);
}
</style>
