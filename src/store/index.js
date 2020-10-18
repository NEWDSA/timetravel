import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //存储sessiontoken
    Authorization:sessionStorage.getItem('Authorization') ? sessionStorage.getItem('Authorization'):'',
    //存储localstorage
    lAuthorization:localStorage.getItem('lAuthorization') ? localStorage.getItem('lAuthorization'):'',
    show:''
  },
  mutations: {
    //修改token,并将token存入localStorage
    changeLogin(state,user){
      state.Authorization=user.Authorization;
      sessionStorage.setItem('Authorization',user.Authorization);
    },
    saveLogin(state,user){

      state.lAuthorization=user.lAuthorization
      localStorage.setItem('Authorization',user)

    },
    //开屏动画是否显示
    changeShow(state,value){
      state.show=value.show
    }
  },
  actions: {
  },
  modules: {
  }
})
