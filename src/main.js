import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import jquery from 'jquery'
window.require("electron-store"); //发送render消息
window.jquery = window.$ = jquery // 全局挂载jquery
Vue.use(ElementUI)
window.electron= window.require("electron").ipcRenderer;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
