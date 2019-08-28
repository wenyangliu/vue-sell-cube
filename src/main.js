import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './register'
import axios from 'axios'
import './common/stylus/index.styl'

axios.defaults.baseURL = 'https://easy-mock.com/mock/5d65f7a9e26c58281ca886af/sell/api'

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
