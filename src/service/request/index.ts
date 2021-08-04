import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYConfig, HYRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
import type { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const DEFAULT_LOADING = false

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean

  constructor(config: HYConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )

    // 为所有的实例添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例request')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            background: 'rgba(0, 0, 0, .4)',
            text: '拼命加载中...'
          })
        }

        return config
      },
      (err) => {
        console.log('all - 请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例response')
        // 移除loading
        if (this.showLoading) this.loading?.close()

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        }
      },
      (err) => {
        console.log('all - 响应失败')
        // 移除loading
        if (this.showLoading) this.loading?.close()
        if (err.response.status === 404) console.log('404的错误~')
        return err
      }
    )
  }

  request<T>(config: HYConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      if (config.showLoading) this.showLoading = true
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: HYConfig): Promise<T> {
    return this.request({ ...config, method: 'get' })
  }
}
export default HYRequest
