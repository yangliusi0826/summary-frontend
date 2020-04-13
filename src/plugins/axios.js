import axios from 'axios'

axios.defaults.timeout = 6000
axios.defaults.baseURL = process.env.VUE_APP_BACKENDDOMAIN

// 添加请求拦截器
axios.interceptors.request.use((config = {}) => {
  config.params = config.params || {}
  config.headers['clientType'] = 'H5'

  return config
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  // todo
  return Promise.reject(error)
})

export default axios