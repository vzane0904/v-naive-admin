import AutoImport from 'unplugin-auto-import/vite'
import { autoPath } from '.'
export const autoImport = () => {
  return AutoImport({
    include: [
      /\.vue$/,
      /\.vue\?vue/,
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    ],
    imports: [
      'vue',
      'vue-router',
      'vue-i18n',
      '@vueuse/head',
      '@vueuse/core',
      'pinia',
    ],
    dts: autoPath + '/auto-import.d.ts',
    eslintrc: {
      enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成
      filepath: './.eslintrc-auto-import.json', // 生成json文件
      globalsPropValue: true,
    },
  })
}
