export type TargetContext = 'user' | 'phone' | 'reset' | 'register'
export interface Params {
  userName: string | number
  password: string | number
}
export interface IUserNameLogin {
  userName: string
  password: string
  picCode: string
  picId: string
}
