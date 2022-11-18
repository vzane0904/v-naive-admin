<template>
  <Modal
    @register="register"
    @ok="handleValidateButtonClick"
    @close="$emit('update:showModal', false)"
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
          <n-form-item-gi :span="12" label="关联菜单" path="menuIdList">
            <n-select
              v-model:value="model.menuIdList"
              placeholder="Select"
              :options="roleList?.list"
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
const model = reactive({
  name: '昵称1',
  label: '',
  remark: '',
  state: 1,
  menuIdList: [],
})
const emit = defineEmits(['update:showModal', 'refresh'])
const props = withDefaults(
  defineProps<{
    showModal?: boolean
  }>(),
  {
    showModal: false,
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
  menuIdList: {
    required: false,
    message: '请选择绑定菜单',
  },
}
const { run, err } = useHttp({
  Api: Api.addRole,
  methods: 'post',
  data: model,
})
const [register, setModal] = useModal({
  title: '新增角色',
  show: props.showModal,
  props: {
    closeOnEsc: true,
  },
})
const { run: getRole, data: roleList } = useHttp({
  Api: Api.getRoleList,
  methods: 'get',
})
const handleValidateButtonClick = () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      await run()
      setModal.setModalProps({
        props: {
          loading: true,
        },
      })
      console.log(err, err.value)

      if (!err.value) {
        createNotification({
          title: '成功',
          content: '新增角色成功',
        })
        emit('update:showModal', false)
        emit('refresh')
      }
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
watch(
  () => props.showModal,
  (v) => {
    setModal.setModalProps({
      show: props.showModal,
    })
    if (v) {
      getRole()
    }
  },
)
</script>
