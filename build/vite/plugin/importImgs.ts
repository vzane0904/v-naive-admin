import ViteImages from 'vite-plugin-vue-images'
export const importImgs = () => {
  return ViteImages({
    dirs: ['src/assets/images'], // 指明图片存放目录
    extensions: ['jpg', 'jpeg', 'png', 'svg', 'webp'],
  })
}
