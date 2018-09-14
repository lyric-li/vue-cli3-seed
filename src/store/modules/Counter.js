import httpclient from '@/utils/httpclient'
import * as counter from '@/api/counter'

const state = {
  main: 0
}

const actions = {
  // do something async
  someAsyncTask ({ commit }) {
    httpclient.get(counter.demo, {
      a: 1
    }).finally(() => {
      commit('INCREMENT_MAIN_COUNTER')
    })
  }
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
