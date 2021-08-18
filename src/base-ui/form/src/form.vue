<template>
  <div class="hy-form">
    <el-form :label-width="labelWidth" label-position="right">
      <el-row>
        <template v-for="(item, index) in formItems" :key="index">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select style="width: 100%" v-bind="item.otherOptions">
                  <el-option
                    v-for="option in item.optionValue"
                    :key="option"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '@/base-ui/form/types'

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '120px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 10px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  name: 'Form'
})
</script>

<style scoped lang="less">
.hy-form {
  padding-top: 22px;
}
</style>
