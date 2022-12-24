// windi.config.ts
import { defineConfig } from 'vite-plugin-windicss'
const range = (size: number, startAt = 1) =>
  Array.from(Array(size).keys()).map((i) => i + startAt)
export default defineConfig({
  attributify: {
    prefix: 'wd:',
  },
  preflight: false,
  alias: {
    hstack: 'flex items-center',
    vstack: 'flex flex-col',
    icon: 'w-6 h-6 fill-current',
    app: 'text-red',
    'app-border': 'border-gray-200 dark:border-dark-300',
  },
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  safelist: [
    range(50).map((i) => `text-${i}px`),
    range(50).map((i) => `m-${i}px`),
    range(50).map((i) => `p-${i}px`),
  ],
})
