import axios from 'axios'
import { ResponseDTO } from '../../dtos/response.dto'

axios.defaults.baseURL = `http://localhost/api`

axios.interceptors.request.use(
  (config) => {
    console.log(config)
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    const originalRequest = err.config
    console.log(originalRequest)
    if(err.response.status === 401) {
      console.log(err)
      return Promise.reject(err)
    }
  }
)

const api = async (method: string, url: string, data: any = null, token: any = null) => {
  try {
    const res = await axios({
      method,
      url,
      data,
      headers: {
        'Authorization': token && `Bearer ${token}`
      }
    })
    return {
      statusCode: res.status,
      message: res.data.data.message,
      data: res.data.data,
    } as ResponseDTO
  } catch (err: any) {
    return {
      statusCode: err.response.status,
      message: 'Server Error',
      error: err
    } as ResponseDTO
  }
}

export {
  api
}