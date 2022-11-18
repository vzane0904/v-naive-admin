export type TargetContext = 'user' | 'phone' | 'reset' | 'register'
export interface Params {
  userName: string | number
  password: string | number
}
export interface IUseNameLogin {
  userName: string
  password: string
  picCode: string
  picId: string
}
