// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import { AuthValuesType, RegisterParams, LoginParams, ErrCallbackType, UserDataType } from './types'

import AuthenticationService from 'src/services/apis/authentication.service'
import userService from 'src/services/apis/user.service'
import { MeDTO, UserDTO } from 'src/dtos/response/user.dto'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
  register: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const [isInitialized, setIsInitialized] = useState<boolean>(defaultProvider.isInitialized)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      setIsInitialized(true)
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
      if (storedToken) {
        setLoading(true)
        const userInfoAPI = await userService.getMe()
        if (userInfoAPI.status == 200) {
          setLoading(false)
          const userInfo = userInfoAPI.results as MeDTO;
          setUser({ ...userInfo, role: 1 }) // set user is admin
        } else {
          localStorage.removeItem('refreshToken')
          localStorage.removeItem(authConfig.storageTokenKeyName)
          setUser(null)
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    }
    initAuth()
  }, [])

  const handleLogin = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
    //api login
    const tokenAPI = await AuthenticationService.login(params)
    if (tokenAPI.status == 200) {
      window.localStorage.setItem(authConfig.storageTokenKeyName, tokenAPI.results?.token as string)
      //get user information
      const userInfoAPI = await userService.getMe();
      if (userInfoAPI.status == 200) {
        const returnUrl = router.query.returnUrl;
        const userInfo = userInfoAPI.results as MeDTO;
        setUser({ ...userInfo })
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/';
        router.replace(redirectURL as string);
      } else {
        if (errorCallback) {
          errorCallback(tokenAPI.error);
        }
      }
    } else {
      if (errorCallback) {
        errorCallback(tokenAPI.error);
      }
    }
  }

  const handleLogout = () => {
    setUser(null)
    setIsInitialized(false)
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/dang-nhap')
  }

  const handleRegister = (params: RegisterParams, errorCallback?: ErrCallbackType) => {
    axios
      .post(authConfig.registerEndpoint, params)
      .then(res => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          handleLogin({ username: params.username, password: params.password })
        }
      })
      .catch((err: { [key: string]: string }) => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
