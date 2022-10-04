import { TagProps } from 'naive-ui'

export const renderLink = (text: string, href: any) => (
  <NButton text tag="a" {...{ href: href, target: '_blank' }} type="primary">
    {text}
  </NButton>
)
export const renderTag = (
  text: string,
  type: Pick<TagProps, 'type'>['type'],
) => <NTag type={type}>{text}</NTag>
