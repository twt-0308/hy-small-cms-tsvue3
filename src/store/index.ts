import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'Hello'
    }
  }
})

export default store
