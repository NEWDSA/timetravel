/*
 * @Author: luciano 
 * @Date: 2020-10-14 18:16:49 
 * @Last Modified by: luciano
 * @Last Modified time: 2020-11-15 10:35:49
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login/Login'
import Study from '@/views/study/study'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: Index,
    children:[
      {
        path:'/study',
        name:'study',
        component:Study
      }
    ]
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
    let token=sessionStorage.getItem('Authorization');
    if(token === null || token ===''){
      next('/login');
    }else{
      next();
    }
    next();
  }
})

export default router
