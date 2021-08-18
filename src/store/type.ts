import { ILoginState } from '@/store/login/type'

export interface IRootState {
  name: string
  age: number
}

export interface IRootAndModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootAndModule
