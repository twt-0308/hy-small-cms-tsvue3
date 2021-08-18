import { Module } from 'vuex'
import { ILoginState } from '@/store/login/type'
import { IRootState } from '@/store/type'
import {
  accountLoginRequest,
  requestMenusByRoleId,
  requestUserInfoById
} from '@/service/login/login'
import { mapMenusToRoutes } from '@/utils/map-menus'
import localCache from '@/utils/cache.ts'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenus: ''
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)
      console.log(routes)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      const result = await accountLoginRequest(payload)
      const { id, token } = result.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2. 用户请求
      const res = await requestUserInfoById(id)
      const userInfo = res.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', JSON.stringify(userInfo))

      // 3.请求用户菜单
      const userMenusResult = await requestMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', JSON.stringify(userMenus))

      // 4.跳转到首页
      await router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', JSON.parse(userInfo))
      }

      const userMenusResult = localCache.getCache('userMenus')
      if (userMenusResult) {
        commit('changeUserMenus', JSON.parse(userMenusResult))
      }
    }
  }
}

export default loginModule
