import ViteRestart from 'vite-plugin-restart'

export const restart = () => {
  return ViteRestart({
    restart: ['.env.[jt]s'],
  })
}
