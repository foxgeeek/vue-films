import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

import './assets/scss/app.scss'

Vue.config.productionTip = false

window._Vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
