export const getEnv = (envName: keyof ViteEnv) => import.meta.env[envName]
