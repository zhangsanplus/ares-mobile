import axios from 'axios'
import { showToast } from 'vant'
import { ResponseEnum } from '@/enums/http'
import { getToken } from './auth'
import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'

const URL = import.meta.env.VITE_API_BASE_URL
const config = {
  // 默认地址
  baseURL: URL,
  // 设置超时时间
  timeout: 10000,
  // 跨域时候允许携带凭证
  // withCredentials: true,
}

class RequestHttp {
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    /**
     * 请求拦截器
     */
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = getToken()
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )

    /**
     * 响应拦截器
     */
    this.service.interceptors.response.use(
      // 2xx 时触发
      (response) => {
        const res = response.data
        // 响应数据为二进制流
        if (res instanceof ArrayBuffer) return res
        // 响应错误
        if (res.code !== ResponseEnum.SUCCESS) {
          return Promise.reject(res.msg || 'Request Error')
        }
        return res
      },
      // 非 2xx 时触发
      (error) => {
        if (axios.isCancel(error)) {
          console.error(error.message)
        } else if (error?.message) {
          showToast(error.message)
        }
        return Promise.reject(error)
      },
    )
  }

  get<T = any>(url: string, params?: Record<string, any>, config: AxiosRequestConfig = {}): Promise<HttpResponse<T>> {
    return this.service.get(url, { params, ...config })
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    return this.service.post(url, data, config)
  }
}

export default new RequestHttp(config)