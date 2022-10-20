export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  username: string
  password: string
}

export type RegisterParams = {
  email: string
  username: string
  password: string
}

export type UserDataType = {
  role: number
  fullName: string
  dob: Date
  gender: number
  email: string
  image: string
  phone: string
}

export type AuthValuesType = {
  loading: boolean
  setLoading: (value: boolean) => void
  logout: () => void
  isInitialized: boolean
  user: UserDataType | null
  setUser: (value: UserDataType | null) => void
  setIsInitialized: (value: boolean) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void
}
