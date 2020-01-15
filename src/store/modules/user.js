export default {
  namespaced: true,
  state: {
    name: null,
    email: null,
    active: false,
    admin: false
  },
  getters: {
  },
  actions: {
    loginUser ({ commit }, user) {
      console.log('[USER-ACTION] - loginUser()')
      // make call to API here to validate user credentials

      if (user.email === 'admin@gmail.com' && user.password === 'admin') {
        commit('loginUser', user)
      }
    },
    logoutUser ({ commit }) {
      console.log('[USER-ACTION] - logoutUser()')
      // make call to API here to logout user?

      commit('logoutUser')
    }
  },
  mutations: {
    loginUser (state, user) {
      console.log('[USER-MUTATION] - loginUser()')
      state.email = user.email
      state.active = true
    },
    logoutUser (state) {
      console.log('[USER-MUTATION] - logoutUser()')
      // eslint-disable-next-line no-unused-expressions
      state.name = null
      state.email = null
      state.active = false
      state.admin = false
    }
  }
}
