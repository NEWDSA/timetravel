import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Lunbo from '@/components/lunbo'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
