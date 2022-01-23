import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
Vue.config.productionTip = false

// const U  = Vue.observable({
//   user:{},
//   logedinUser(u) {
//     U.user = u
//   }
// })
// 
// Vue.prototype.$U = U
import Vuex from 'vuex'
Vue.use(Vuex)

// import User from './conn_user'  
// Vue.use(User)  

new Vue({
  el: '#app',
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
