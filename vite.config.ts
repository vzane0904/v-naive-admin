/* eslint-disable camelcase */
import { wrapperEnv } from './build/utils'
import { createProxy } from './build/vite/proxy'
import { createPlugin } from './build/vite/plugin'
import { createAlias } from './build/vite/resolve'
import { ConfigEnv, loadEnv } from 'vite'
import path from 'path'
import { APP_INFO } from './build/vite/define'
export default ({ command, mode }: ConfigEnv) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const isBuild = command === 'build'
  const ViteEvn = wrapperEnv(env)
  const prefix = `monaco-editor/esm/vs`

  const {
    VITE_APP_PORT,
    VITE_APP_LOG,
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
        'dayjs',
        // 'default-passive-events',
        'lodash-es',
        'screenfull',
        'vue-i18n',
        'Clipboard',
        'monaco-editor',
        'monaco-editor ',
        'monaco-editor/esm/vs/editor/editor.api.js',
        'monaco-editor/esm/vs/editor/editor.main.js',
        `monaco-editor/esm/vs/language/json/json.worker`,
        `monaco-editor/esm/vs/language/css/css.worker`,
        `monaco-editor/esm/vs/language/html/html.worker`,
        `monaco-editor/esm/vs/language/typescript/ts.worker`,
        `monaco-editor/esm/vs/editor/editor.worker`,
      ],
      exclude: [],
    },
    esbuild: {
      pure: VITE_APP_LOG ? ['console.log', 'debugger'] : [],
    },
    build: {
      target: 'modules',
      outDir: VITE_APP_BUILD,
      cssTarget: 'chrome86',
      minify: 'terser',
      sourcemap: VITE_APP_SOURCEMAP,
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      terserOptions: {
        compress: {
          drop_console: VITE_APP_LOG,
          drop_debugger: VITE_APP_LOG,
        },
      },
      rollupOptions: {
        // external: ['vue', 'vuex', 'axios', 'vue-router'],
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              // @ts-ignore
              return /node_modules\/(?!.pnpm).*/
                .exec(id)[0]
                .split('node_modules/')[1]
                .split('/')[0]
            }
          },
          // manualChunks: {
          //   jsonWorker: [`${prefix}/language/json/json.worker`],
          //   cssWorker: [`${prefix}/language/css/css.worker`],
          //   htmlWorker: [`${prefix}/language/html/html.worker`],
          //   tsWorker: [`${prefix}/language/typescript/ts.worker`],
          //   editorWorker: [`${prefix}/editor/editor.worker`],
          // },
        },
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(APP_INFO),
    },
    base: '/',
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
