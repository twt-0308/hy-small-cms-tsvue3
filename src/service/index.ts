// service 统一出口
import HYRequest from '@/service/request'
import { BASE_URL, TIME_OUT } from '@/service/request/config'
import localCache from '@/utils/cache'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      const token = localCache.getCache('token')
      if (token) config.headers.Authorization = `Bearer ${token}`
      return config
    },
    requestInterceptorsCatch: (err) => {
      console.log('请求错误被拦截')
      return err
    },
    responseInterceptors: (res) => {
      console.log('实例的response')
      return res
    },
    responseInterceptorsCatch: (err) => {
      console.log(err)
      return err
    }
  }
})

export default hyRequest
