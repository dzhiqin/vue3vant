import axios from 'axios'
import config from '@/config'

// eslint-disable-next-line no-undef
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.prod
const service = axios.create({
  baseURL: baseUrl,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  (response) => {
    if(response.status === 200) {
      const {data: {code,message,result}} = response
      return {status: code, message, data: result}
    }else{
      return Promise.reject(new Error(response || 'error'))
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default service