import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // Count의 +를 하는 메소드
    plusCount(state, payload) {
      state.count = payload++;
    },
    // Count의 -를 하는 메소드
    minusCount(state, payload) { 
      state.count = payload--;
    }
  },
  actions: {
    doPlusCountAction({commit}, count) {
      commit('plusCount', count);
    },
    doMinusCountAction({commit}, count) {      
      commit('minusCount', count);
    }
  },
  modules: {

  }
})
