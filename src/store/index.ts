import { createStore } from 'vuex'

const TYPES: any = {
  [Symbol.for('account')]: ''
}

export default createStore({
  state: {
    accountName: ''
  },
  getters: {
    accountName: state => state.accountName
  },
  mutations: {
    [TYPES[Symbol.for('account')]] (state, payload) {
      state.accountName = payload
    }
  },
  actions: {
    setAccountName ({commit}, payload = '') {
      commit(TYPES[Symbol.for('account')], payload)
    }
  },
  modules: {
  }
})
