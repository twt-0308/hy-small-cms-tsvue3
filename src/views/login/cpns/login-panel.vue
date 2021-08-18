<template>
  <div class="login-panel">
    <h1 class="text">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane label="账号登录" name="1">
        <template #label>
          <span><i class="el-icon-user"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="2">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码?</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('1')

    const handleLoginClick = () => {
      if (currentTab.value === '1') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        phoneRef.value?.loginAction()
      }
    }
    return {
      isKeepPassword,
      accountRef,
      currentTab,
      phoneRef,
      handleLoginClick
    }
  },
  components: {
    LoginAccount,
    LoginPhone
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .text {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    margin: 5px 0 0 0;
  }
  .login-btn {
    width: 100%;
    margin-top: 8px;
  }
}
</style>
