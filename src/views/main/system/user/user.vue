<template>
  <div class="user">
    <hy-form v-bind="formConfig"></hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm, { IFormItem, IForm } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    const formItems: IFormItem[] = [
      { label: '用户名', rules: [], placeholder: '请输入用户', type: 'input' },
      {
        label: '密码',
        rules: [],
        placeholder: '请输入密码',
        type: 'input',
        otherOptions: {
          ['show-password']: true
        }
      },
      {
        label: '喜欢的运动',
        rules: [],
        placeholder: '请输入喜欢的运动',
        type: 'select',
        optionValue: [
          {
            title: '篮球',
            value: 0
          },
          {
            title: '足球',
            value: 1
          }
        ]
      },
      {
        label: '创建时间',
        placeholder: '请选择创建时间范围',
        type: 'datepicker',
        otherOptions: {
          type: 'daterange',
          ['range-separator']: '至',
          ['start-placeholder']: '开始日期',
          ['end-placeholder']: '结束日期'
        }
      }
    ]
    const labelWidth = '120px'
    const itemStyle = { padding: '10px 10px' }
    const formConfig: IForm = {
      formItems,
      labelWidth,
      itemStyle
    }
    return {
      formItems,
      labelWidth,
      itemStyle,
      formConfig
    }
  }
})
</script>

<style scoped></style>
