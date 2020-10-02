import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BMap from 'bmap'
import Element from 'element-ui'
import './element-variables.scss'
Vue.use(Element)
Vue.use(BMap)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
