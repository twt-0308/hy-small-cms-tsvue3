import type { App } from 'vue'
import RegisterElementFunc from './register-element'

export function registerApp(app: App): void {
  app.use(RegisterElementFunc) // 注册element-plus
}
