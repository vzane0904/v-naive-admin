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
          <n-form-item-gi :span="24" label="上级节点" path="parentId">
            <NTreeSelect
              v-model:value="model.parentId"
              label-field="name"
              key-field="id"
              :options="bindMenuList"
              default-value=""
              clearable
            />
          </n-form-item-gi>
          <n-form-item-gi :span="24" label="节点名称" path="name">
            <n-input v-model:value="model.name" placeholder="请输入名称" />
          </n-form-item-gi>
          <!-- <n-form-item-gi
            :span="24"
            label="权限标识"
            path="path"
            v-if="model.type === 3"
          >
            <n-input
              v-model:value="model.path"
              placeholder="请输入权限标识名称"
            />
          </n-form-item-gi> -->
          <n-form-item-gi
            :span="24"
            label="组件地址"
            path="component"
            v-if="model.type === 2"
          >
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
          <n-form-item-gi
            :span="24"
            :label="
              model.type === 1
                ? '目录标识'
                : model.type === 2
                ? '路由地址'
                : '权限标识'
            "
            path="path"
          >
            <NInput
              v-model:value="model.path"
              placeholder="router.path 如/test"
            />
          </n-form-item-gi>
          <n-form-item-gi
            :span="24"
            label="重定向"
            path="redirect"
            v-if="model.type === 2"
          >
            <NInput
              v-model:value="model.redirect"
              placeholder="请输入重定向地址"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="24" label="节点图标" path="icon">
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
          <n-form-item-gi :span="24" label="排序号" path="orderNo">
            <NInputNumber
              v-model:value="model.orderNo"
              placeholder="排序号"
              :min="0"
              :max="9999"
            />
          </n-form-item-gi>
          <n-form-item-gi
            :span="24"
            label="页面标题"
            path="title"
            v-if="model.type === 2"
          >
            <NInput v-model:value="model.title" placeholder="请输入名称" />
          </n-form-item-gi>
          <n-form-item-gi
            :span="8"
            label="路由缓存"
            path="keepAlive"
            v-if="model.type === 2"
          >
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
          <n-form-item-gi :span="8" label="是否显示" path="state">
            <n-switch
              v-model:value="model.state"
              :checked-value="1"
              :unchecked-value="0"
            />
          </n-form-item-gi>
          <n-form-item-gi
            :span="8"
            label="激活菜单时隐藏tab"
            path="hideTab"
            v-if="model.type === 2"
          >
            <n-switch
              v-model:value="model.hideTab"
              :checked-value="true"
              :unchecked-value="false"
            />
          </n-form-item-gi>
          <n-form-item-gi
            :span="12"
            label="query参数"
            path="query"
            v-if="model.type === 2"
          >
            <!-- <NInput
              type="textarea"
              v-model:value="model.query"
              placeholder="请输入名称"
            /> -->
          </n-form-item-gi>
          <n-form-item-gi
            :span="12"
            label="params参数"
            path="params"
            v-if="model.type === 2"
          >
            <!-- <NInput
              type="textarea"
              v-model:value="model.params"
              placeholder="请输入名称"
            /> -->
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
import { glyphs } from '@/assets/icons/iconfont.json'
const initialState = {
  parentId: '',
  type: 1,
  name: '',
  path: '',
  redirect: '',
  disabled: true,
  component: '',
  icon: '',
  title: '',
  hideMenu: false,
  hideTab: false,
  orderNo: 0,
  state: 1,
  query: {},
  params: {},
  keepAlive: 0,
}
const bindMenuList = ref<IMenuList[]>([])
const songs = [
  {
    value: 1,
    label: '目录',
  },
  {
    value: 2,
    label: '菜单',
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
    message: '请输入节点名称',
  },
  // path: {
  //   required: true,
  //   trigger: ['blur', 'input'],
  //   message: model.type === 2 ? '请输入路由地址' : '请输入权限标识',
  // },
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
  query: {
    required: false,
    message: '请选择绑定菜单',
  },
  params: {
    required: false,
    message: '请选择绑定菜单',
  },
}
// 扫描文件目录
const findFiles = function findFiles() {
  const files = import.meta.glob([
    '/src/views/**/*.vue',
    // {views,layouts/error}
    // '!**/components',
  ])
  const list: string[] = []
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
console.log(data.value)
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
      console.log('xxxxxxxxx', err.value)

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
      console.log('???')

      setModal.setModalProps({
        props: {
          loading: false,
        },
      })
    } else {
      console.log(errors)
      console.log('验证失败')
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
    console.log(bindMenuList.value)
  }
}
onMounted(() => {
  // data.value = findFiles()
  console.log('iconJson', glyphs)
})
watch(
  () => props.showModal,
  (v) => {
    setModal.setModalProps({
      show: props.showModal,
    })
    if (v) {
      setModal.setModalProps({
        title: props.type === 'add' ? '新增角色' : '修改角色',
      })
      getMenuList()
      // getRole()
    } else {
      Object.assign(model, initialState)
    }
    if (props.type === 'edit') {
      Object.assign(model, props.info)
    }
  },
)
watch(
  () => props.parentId,
  (val: string | number) => {
    if (val) {
      console.log(val)
      model.parentId = val
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
