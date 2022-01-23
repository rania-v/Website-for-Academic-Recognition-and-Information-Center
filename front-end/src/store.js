import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  key: "ls",
  storage: window.localStorage,
});
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    User: null
  },
  mutations: {
    LOGIN (state, u) {
      state.User = u;
      console.log('loged in ', state.User)
      // state.User = { ...state.User, u }
    },
    UPDATE (state, u) {
      state.User = u;
    },
    LOGOUT (state) {
      state.User = null
    }
  },
  // actions:{
  //     loginUser({ commit }, user) {
  //       commit("login", user);
  //   },
  //     updateUser({commit}, user) {
  //       commit("update", user)
  //     }
  // },
  plugins: [vuexLocal.plugin]
})