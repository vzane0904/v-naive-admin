import { SelectMixedOption } from 'naive-ui/lib/select/src/interface'
import { PropType } from 'vue'
const basicProps = {
  name: {
    type: String,
    default: 'xx',
  },
  model: {
    type: [String, Number, Boolean],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}
export const FormItemProps = {
  name: {
    type: String,
    required: true,
  },
}
export const SelectProps = {
  list: {
    type: Array as PropType<SelectMixedOption[]>,
    required: true,
  },
  ...basicProps,
  clearable: {
    type: Boolean,
    default: false,
  },
}
export const SwitchProps = {
  ...basicProps,
}
export const InputNumProps = {
  ...basicProps,
  model: {
    type: Number,
  },
  suffix: {
    type: String,
    default: '',
  },
  max: {
    type: Number,
  },
  min: {
    type: Number,
  },
}
export const ColorProps = {
  colorList: {
    type: Array as PropType<string[]>,
    require: true,
    default: [],
  },
  model: {
    type: [String, Number, Boolean],
  },
}
