import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './type'
import login from '@/store/login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'Hello',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export async function setupStore() {
  await store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
