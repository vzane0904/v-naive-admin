<template>
  <Modal
    @register="register"
    @ok="handleValidateButtonClick"
    @close="close"
    style="width: 50%"
  >
    <div>
      <n-form ref="formRef" :model="model" :rules="rules" label-placement="top">
        <n-grid :cols="24" :x-gap="24">
          <n-form-item-gi :span="12" label="名称" path="name">
            <n-input v-model:value="model.name" placeholder="请输入名称" />
          </n-form-item-gi>
          <n-form-item-gi :span="12" label="角色唯一标识" path="label">
            <n-input v-model:value="model.label" placeholder="请输入角色标识" />
          </n-form-item-gi>
          <n-form-item-gi :span="12" label="备注" path="remark">
            <n-input
              type="textarea"
              v-model:value="model.remark"
              placeholder="请输入备注"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="12" label="关联菜单" path="permissionList">
            <NTreeSelect
              cascade
              checkable
              label-field="name"
              key-field="id"
              v-model:value="model.permissionList"
              placeholder="Select"
              :options="bindMenuList"
              value-field="id"
              multiple
            />
          </n-form-item-gi>
          <n-form-item-gi :span="12" label="状态" path="state">
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
import { createNotification } from '@/utils/message'
import { FormInst, FormRules } from 'naive-ui'
import { IMenuList } from '../../menu/type'
const initialState = {
  name: '',
  label: '',
  remark: '',
  state: 1,
  permissionList: [],
}
const bindMenuList = ref<IMenuList[]>([])
const model = reactive({
  ...initialState,
})
const emit = defineEmits(['update:showModal', 'refresh', 'update:type'])
const props = withDefaults(
  defineProps<{
    showModal?: boolean
    type?: 'add' | 'edit'
    info?: Object
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
    message: '请输入名称',
  },
  label: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入角色标识',
  },
  remark: {
    required: false,
    trigger: ['blur', 'input'],
    message: '请输入备注',
  },
  state: {
    required: true,
    message: '请设置用户状态',
  },
  permissionList: {
    required: false,
    message: '请选择绑定菜单',
  },
}

const [register, setModal] = useModal({
  title: '新增角色',
  show: props.showModal,
  props: {
    closeOnEsc: true,
  },
})
const sunMit = function () {
  return new Promise(async (resolve) => {
    if (props.type === 'edit') {
      // 新增角色
      const { run, err } = useHttp({
        Api: Api.ApiUpdateRole,
        methods: 'patch',
        data: model,
      })
      await run()
      if (!err.value) {
        createNotification({
          title: '成功',
          content: '角色修改成功',
        })
        emit('update:showModal', false)
        emit('refresh')
      }
      resolve(true)
      console.log('edit', model)
    } else {
      // 新增角色
      const { run, err } = useHttp({
        Api: Api.addRole,
        methods: 'post',
        data: model,
      })
      await run()
      if (!err.value) {
        createNotification({
          title: '成功',
          content: '角色新增成功',
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
      await sunMit()
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
// 获取权限
const getMenuList = async function () {
  const { run, data, err } = useHttp({
    Api: Api.APiMenuList,
    methods: 'get',
  })
  await run()
  if (!err.value) {
    bindMenuList.value = data.value.list
    console.log(bindMenuList.value)
  }
}
const close = function close() {
  emit('update:showModal', false)
  emit('update:type', 'add')
}
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
    } else {
      Object.assign(model, initialState)
    }
    if (props.type === 'edit') {
      Object.assign(model, props.info)
    }
  },
)
</script>
