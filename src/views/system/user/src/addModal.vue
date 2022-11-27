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
          <n-form-item-gi :span="12" label="用户名" path="userName">
            <n-input
              v-model:value="model.userName"
              placeholder="请输入登录用户名"
            />
          </n-form-item-gi>
          <n-form-item-gi
            v-if="type === 'add'"
            :span="12"
            label="密码"
            path="password"
          >
            <n-input
              v-model:value="model.password"
              placeholder="请输入登录密码"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="12" label="邮箱" path="email">
            <n-input v-model:value="model.email" placeholder="请输入邮箱" />
          </n-form-item-gi>
          <n-form-item-gi :span="12" label="手机号" path="phone">
            <n-input v-model:value="model.phone" placeholder="请输入手机号" />
          </n-form-item-gi>
          <n-form-item-gi :span="12" label="关联角色" path="roleIdList">
            <n-select
              v-model:value="model.roleIdList"
              placeholder="Select"
              :options="roleList?.list"
              value-field="id"
              label-field="name"
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
import { IUserList } from '../type'
const initialState = {
  name: '',
  userName: '',
  password: '',
  email: '',
  phone: '',
  state: 1,
  roleIdList: [],
}
const model = reactive({ ...initialState })
const emit = defineEmits(['update:showModal', 'refresh', 'update:type'])
const props = withDefaults(
  defineProps<{
    showModal?: boolean
    type?: 'add' | 'edit'
    info?: IUserList | null
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
  userName: {
    required: true,
    trigger: ['blur', 'input'],
    message: '用户名不可为空',
  },
  password: {
    required: true,
    trigger: ['blur', 'input'],
    message: '密码不可为空',
  },
  email: {
    required: true,
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    trigger: ['blur', 'input'],
    message: '请输入正确邮箱',
  },
  phone: {
    required: true,
    pattern:
      /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/,
    trigger: ['blur', 'input'],
    message: '请输入正确手机号',
  },
  state: {
    required: true,
    message: '请设置用户状态',
  },
  roleIdList: {
    required: false,
    message: '请选择绑定角色',
  },
}
// 弹框
const [register, setModal] = useModal({
  title: '新增用户',
  show: props.showModal,
  props: {
    closeOnEsc: true,
  },
})
// 获取角色
const { run: getRole, data: roleList } = useHttp({
  Api: Api.getRoleList,
  methods: 'get',
})
// 新增用户
const addUser = async function () {
  // 新增接口
  const { run, err } = useHttp({
    Api: Api.addUser,
    methods: 'post',
    data: model,
  })
  setModal.setModalProps({
    props: {
      loading: true,
    },
  })
  await run()
  if (!err.value) {
    createNotification({
      title: '成功',
      content: '新增用户成功',
    })
    emit('update:showModal', false)
    emit('refresh')
  }
  setModal.setModalProps({
    props: {
      loading: false,
    },
  })
}
// 更新角色
const updateUser = async function () {
  // 新增接口
  const params = {
    id: props.info!.id,
    roleIdList: model.roleIdList,
    name: model.name,
    userName: model.userName,
    email: model.email,
    phone: model.phone,
    state: model.state,
  }

  const { run, err } = useHttp({
    Api: Api.updateUser,
    methods: 'patch',
    data: params,
  })
  setModal.setModalProps({
    props: {
      loading: true,
    },
  })
  await run()
  if (!err.value) {
    createNotification({
      title: '成功',
      content: '修改用户信息成功',
    })
    emit('update:showModal', false)
    emit('refresh')
  }
  setModal.setModalProps({
    props: {
      loading: false,
    },
  })
}
// 提交
const handleValidateButtonClick = () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      if (props.type === 'add') {
        addUser()
      } else {
        updateUser()
      }
    } else {
      console.log(errors)
      console.log('验证失败')
    }
  })
}
const close = function close() {
  Object.assign(model, initialState)
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
      getRole()
    }
    if (props.type === 'edit') {
      Object.assign(model, props.info)
    }
  },
)
</script>
