import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './register'
import axios from 'axios'
import './common/stylus/index.styl'

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
