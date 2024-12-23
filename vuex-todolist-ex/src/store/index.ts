import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openCreateModal: false
  },
  mutations: {
    toggleCreateNoteModal (state: any) {
      state.openCreateModal = true;
    }
  },
  actions: {
    toggleCreateNoteModal ({ commit }) {
      commit('toggleCreateNoteModal')
    }
  },
  modules: {

  }
})
