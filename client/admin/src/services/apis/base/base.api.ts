import axios, { AxiosError } from 'axios'
import { ResponseDTO } from '../../../dtos/response.dto'
import { getStorage } from '../../local-storage/local-storage.service'

axios.defaults.baseURL = 'http://localhost:8000/api/v1/'

axios.interceptors.request.use(
    config => {
        const token = getStorage("accessToken")
        if (token) {
            if (config.headers)
                config.headers['Authorization'] = 'Bearer ' + token
        }
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
        if (err.response.status === 401) {
            console.log(err)
            return Promise.reject(err)
        }
    }
)

const getAPI = async <T>(method: string, url: string, data?: any) => {
    try {
        const res = await axios({
            method,
            url,
            data
        })
        return {
            status: res.status,
            message: res.data.message,
            results: res.data.results,
        } as ResponseDTO<T>
    } catch (err: any) {
        const error: AxiosError = err
        return {
            status: error.response?.status,
            message: 'Server Error',
            error: err
        } as ResponseDTO<T>
    }
}

export default getAPI
