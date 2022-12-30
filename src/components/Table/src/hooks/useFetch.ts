import { BasicTableProps } from '../type/table'
import { cloneDeep } from 'lodash-es'
import { toType } from '@/utils/dataType'
export const beforeFetch = function () {}
export const useAfterFetch = async function (
  config: BasicTableProps,
  data: Record<string, any>[],
) {
  const clone = cloneDeep(data)
  const res = await config.afterFetch!(clone)
  if (toType(res) === 'array') {
    return res
  }
  console.warn(`Table data type must be an array`)
  return []
}
