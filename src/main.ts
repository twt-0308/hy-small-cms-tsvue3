import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { registerApp } from '@/global'
import 'normalize.css'
import '@/assets/css/index.less'
import { setupStore } from '@/store'

const app = createApp(App)

// registerApp(app) 第一种写法
app.use(registerApp) // 第二种写法

app.use(router)
app.use(store)
app.mount('#app')
setupStore()

/*
hyRequest
  .get<dataType>({
    url: '/home/multidata',
    showLoading: true,
    interceptors: {
      requestInterceptors: (config) => {
        console.log('独享的request')
        return config
      },
      responseInterceptors: (res) => {
        console.log('独享的response')
        return res
      }
    }
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.success)
    console.log(res.returnCode)
  })
*/
