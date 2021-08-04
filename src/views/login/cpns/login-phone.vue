<template>
  <div class="login-phone">
    <el-form label-width="70px" :rules="phoneRules" :model="account">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input type="password" v-model="account.code" />
          <el-button type="primary" style="margin-left: 10px"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { phoneRules } from '@/views/login/config/account-config'

export default defineComponent({
  setup() {
    const account = reactive({
      phone: '',
      code: ''
    })
    return {
      account,
      phoneRules
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}
</style>
