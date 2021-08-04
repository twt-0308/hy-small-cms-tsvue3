import type { App } from 'vue'
import {
  ElButton,
  ElAlert,
  ElForm,
  ElFormItem,
  ElTabs,
  ElTabPane,
  ElInput,
  ElCheckbox,
  ElLink
} from 'element-plus'
import 'element-plus/lib/theme-chalk/base.css'

const components = [
  ElForm,
  ElAlert,
  ElButton,
  ElFormItem,
  ElTabs,
  ElTabPane,
  ElInput,
  ElCheckbox,
  ElLink
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
