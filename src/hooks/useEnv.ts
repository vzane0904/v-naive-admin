export const getEnv = (envName: keyof ViteEnv) => {
  // 解决 [rollup-plugin-dynamic-import-variables] Unexpected token
  const env: any = import.meta.env
  return env[envName]
}
