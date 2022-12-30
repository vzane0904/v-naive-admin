<template>
  <Content>
    <template v-slot:header>
      <div>
        <NH2>关于</NH2>
        <h5>
          <NButton text tag="a" target="_blank" type="primary">
            v-naive-admin
          </NButton>
          是一个基于Vue3.0、Vite、 Naive-UI 、TypeScript
          的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。
        </h5>
      </div>
    </template>
    <Description @register="adminInfoRegister" />
    <Description @register="devRegister" class="mt-10px" />
    <Description @register="ProdRegister" class="mt-10px" />
  </Content>
</template>

<script lang="ts" setup>
import { IInfoSchema } from '@/components/Descriptions/src/type'
import { Description, useDescription } from '@components/Descriptions'
import dayjs from 'dayjs'
import { renderLink, renderTag } from './src/rednder'
const {
  pkg: { devDependencies, dependencies, version },
  lastBuildTime,
} = __APP_INFO__
const [adminInfoRegister] = useDescription({
  title: '项目信息',
  schema: [
    {
      label: '版本',
      field: 'version',
      render: (val) => renderTag('v' + val, 'primary'),
    },
    {
      label: '最后编译时间',
      field: 'lastBuildTime',
      render: (val) => dayjs(val).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      label: '文档地址',
      field: 'docsUrl',
      render: () => renderLink('文档地址', 'http://www.doc.mmxxn.cn/'),
    },
    {
      label: '预览地址',
      field: 'previewUrl',
      render: () => renderLink('预览地址', 'http://www.mmxxn.cn/'),
    },
    {
      label: 'Github',
      field: 'github',
      render: () =>
        renderLink('github', 'https://github.com/vzane0904/v-naive-admin'),
    },
  ],
  data: {
    id: 1,
    version: version,
    lastBuildTime: lastBuildTime,
    docsUrl: 'http://www.doc.mmxxn.cn/',
    previewUrl: '预览地址',
    github: 'Github',
  },
  column: 2,
  bordered: true,
})
const getJson = (obj: object) => {
  const keys = Object.keys(obj)
  const targetSchema: IInfoSchema[] = []
  const targetData = { id: 1 }
  keys.forEach((item) => {
    targetSchema.push({ label: item, field: item })
    Reflect.set(targetData, item, Reflect.get(obj, item))
  })
  return { targetSchema, targetData }
}
const { targetSchema: proTargetSchema, targetData: proTargetData } =
  getJson(dependencies)
const [ProdRegister] = useDescription({
  title: '生产环境依赖',
  schema: proTargetSchema,
  data: proTargetData,
  bordered: true,
  columns: 3,
})
const { targetSchema: devTargetSchema, targetData: devTargetData } =
  getJson(devDependencies)
const [devRegister] = useDescription({
  title: '开发环境依赖',
  schema: devTargetSchema,
  data: devTargetData,
  bordered: true,
  columns: 3,
})
</script>

<style scoped></style>
