import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // Count의 +를 하는 메소드
    plusCount(state) {
      state.count++;
    },
    // Count의 -를 하는 메소드
    minusCount(state) {
      if(state.count === 0) return;
      state.count--;
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
