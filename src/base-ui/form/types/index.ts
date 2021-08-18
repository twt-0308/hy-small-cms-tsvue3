type IFormType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  label: string
  rules?: any[]
  placeholder?: any
  type: IFormType
  otherOptions?: any
  optionValue?: any[]
  itemStyle?: ''
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
