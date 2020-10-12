import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BMap from 'bmap'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import jquery from 'jquery'
import 'babel-polyfill'

window.jquery=window.$=jquery //全局挂载jquery
Vue.use(ElementUI)
Vue.use(BMap)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
