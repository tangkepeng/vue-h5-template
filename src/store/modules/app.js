import { getUserinfo } from '@/api/project'

const state = {
  user: null
}
const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

const actions = {
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserinfo()
        .then(response => {
          commit('setUser', response.result)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}