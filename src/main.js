import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import axios from './plugins/axios'
import 'amfe-flexible/index.js'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
