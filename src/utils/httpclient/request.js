import axios from 'axios'
import qs from 'qs'
import ServiceError from './error'
import { Message, Loading } from 'element-ui'

console.log('process.env.BASE_API:', process.env)

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  transformRequest: [
    data => {
      data = qs.stringify(data)
      return data
    }
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 25000
})

let loading = null
request.interceptors.request.use(config => {
  const options = config.options || {}
  if (typeof (options.loading) === 'undefined') {
    options.loading = true
  }
  if (options.loading) {
    loading = Loading.service({
      text: '正在加载, 请稍后...'
    })
  }
  config = Object.assign(config, { options })
  return config
}, err => {
  return Promise.reject(err)
})

request.interceptors.response.use(res => {
  const options = res.config.options
  if (options.loading) {
    loading.close()
  }
  // 响应数据
  const result = res.data
  if (result.code !== 200) {
    return Promise.reject(new ServiceError(JSON.stringify(result)))
  }
  return result.data
}, err => {
  loading.close()
  Message.error('服务器异常')
  return Promise.reject(err)
})

export default request
