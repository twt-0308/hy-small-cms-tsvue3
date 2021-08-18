<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      <span class="userName">{{ name }}</span>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
        <el-dropdown-item divided>系统操作</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'UserInfo',
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return {
      name
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  .userName {
    padding-left: 5px;
  }
}
</style>
