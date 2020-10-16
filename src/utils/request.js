import axios from 'axios'
const request = axios.create({

  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 // 请求超时,5000毫秒

  
})
// 请求拦截

request.interceptors.request.use(config => {
  if (localStorage.getItem('Authorization')) {
    config.headers.Authorization = localStorage.getItem('Authorization')
  }

  return config
}, error => {
  // 出现异常
  return Promise.reject(error)
  console.log('err')
})
// 响应拦截
request.interceptors.response.use(res => {
  return res
}, error => {
  return Promise.reject(error)
})


export default request // 导出自定义创建 axios 对象
