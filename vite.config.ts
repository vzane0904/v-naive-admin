import { wrapperEnv } from './build/utils'
import { createProxy } from './build/vite/proxy'
import { createPlugin } from './build/vite/plugin'
import { createAlias } from './build/vite/resolve'
import { ConfigEnv, loadEnv } from 'vite'
import path from 'path'
export default ({ command, mode }: ConfigEnv) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const isBuild = command === 'build'
  const ViteEvn = wrapperEnv(env)
  const {
    VITE_APP_PORT,
    // VITE_APP_LOG,
    VITE_APP_BUILD,
    VITE_APP_SOURCEMAP,
    VITE_APP_HTTPS,
    VITE_APP_PROXY,
    VITE_APP_OPEN,
    // VITE_APP_TITLE,
    VITE_APP_PREFIXCLS,
  } = ViteEvn
  return {
    plugins: createPlugin(ViteEvn, isBuild, command),
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            prefix: VITE_APP_PREFIXCLS,
          },
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: [
        ...createAlias(path.resolve(__dirname)),
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
      ],
    },
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        'pinia',
        'pinia-plugin-persist',
        'axios',
        'naive-ui',
        'nprogress',
        '@vicons/ionicons5',
        '@vueuse/core',
        'default-passive-events',
        'lodash-es',
        'screenfull',
        'vue-i18n',
      ],
      exclude: [],
    },
    build: {
      target: 'modules',
      outDir: VITE_APP_BUILD,
      cssTarget: 'chrome86',
      minify: 'terser',
      sourcemap: VITE_APP_SOURCEMAP,
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      // terserOptions: {
      //   compress: {
      //     keepInfinity: true,
      //     dropConsole: VITE_APP_LOG,
      //   },
      // },
    },
    base: './',
    server: {
      open: VITE_APP_OPEN,
      host: true,
      port: VITE_APP_PORT,
      https: VITE_APP_HTTPS,
      strictPort: false,
      proxy: createProxy(VITE_APP_PROXY),
    },
  }
}
