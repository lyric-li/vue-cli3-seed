import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import './assets/styles/index.scss'
import './icons'
import './utils/amfe-flexible'

console.log('ENV:', process.env.VUE_APP_ENV_CONFIG)
console.log('BASE_API:', process.env.VUE_APP_BASE_API)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
