import visualizer from 'rollup-plugin-visualizer'

export const buildVisualizer: any = () =>
  visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true,
  })
