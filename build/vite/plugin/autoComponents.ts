import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { autoPath } from '.'
export const componentTS = () => {
  return Components({
    resolvers: [NaiveUiResolver()],
    directoryAsNamespace: true,
    extensions: ['vue'],
    dts: autoPath + '/components.d.ts',
    // dts: false,
    dirs: ['src/components'],
    deep: true,
    globalNamespaces: [],
    directives: true,
    include: [
      /\.vue$/,
      /\.vue\?vue/,
      /\.[tj]s[x]?$/, // .ts, .tsx, .js, .jsx
    ],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
  })
}
