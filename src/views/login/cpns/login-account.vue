<template>
  <div class="login-account">
    <el-form label-width="60px" ref="formRef" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import localCache from '@/utils/cache.ts'
import { useStore } from 'vuex'
import { rules } from '@/views/login/config/account-config'
import { ElForm } from 'element-plus'

export default defineComponent({
  setup() {
    const store = useStore()
    const user = localCache.getCache('user')
    const account = reactive({
      name: user?.name ?? '',
      password: user?.password ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 记住密码
          if (isKeepPassword) {
            localCache.setCache('user', account)
          } else {
            localCache.deleteCache('user')
          }
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      formRef,
      loginAction,
      rules
    }
  }
})
</script>

<style scoped></style>
