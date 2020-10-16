/*
 * @Author: luciano 
 * @Date: 2020-10-14 18:16:49 
 * @Last Modified by: luciano
 * @Last Modified time: 2020-10-16 01:48:41
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Login from '@/views/Login/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }, 
  {
    path:'/login',
    name:'login', 
    component:Login
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//导航守卫
//使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to,from,next)=>{
  if(to.path === '/login'){
    next();
  }else{
    let token=localStorage.getItem('Authorization');
    if(token === null || token ===''){
      next('/login');
    }else{
      next();
    }
  }
})

export default router
