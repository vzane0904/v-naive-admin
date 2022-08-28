import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
export const icons = () => {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
    symbolId: 'icon-[dir]-[name]',
    /**
     * 自定义插入位置
     * @default: body-last
     */
    inject: 'body-last',
    //  | 'body-first'

    /**
     * custom dom id
     * @default: __svg__icons__dom__
     */
    customDomId: '__svg__icons__dom__',
  })
}
