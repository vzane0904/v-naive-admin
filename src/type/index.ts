export interface Record<T = any> {
  [x: string]: T
}
export type Expand<T> = T extends infer o ? { [K in keyof o]: o[K] } : never
type Simplify<T> = {
  [P in keyof T]: T[P]
}
export type SetOptional<T, K extends keyof T> = Simplify<
  // Partial in 可有可无键值的那部分
  // Pick 必须有的键值的那部分
  Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>
>
