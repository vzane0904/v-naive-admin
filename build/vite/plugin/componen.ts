import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
export const componentTS = () => {
  return Components({
    resolvers: [NaiveUiResolver()],
    directoryAsNamespace: true,
    extensions: ['vue'],
    dts: 'src/config/components.d.ts',
    // dts: false,
    dirs: ['src/components'],
    deep: false,
    globalNamespaces: [],
    directives: true,
    include: [
      /\.vue$/,
      /\.vue\?vue/,
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    ],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
  })
}
