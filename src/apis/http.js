import axios from 'axios';

import { BASE_URL, TIMEOUT } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

// 请求拦截器
instance.interceptors.request.use(config => {
  return config;
}, err => {
  console.log(err);
  return Promise.reject(err)
})

// 响应拦截器即异常处理
instance.interceptors.response.use(response => {
  let status = response.status
  let data = response.data  
  if (status === 200) {
    return Promise.resolve(data)
  }
}, err => {
  return Promise.reject(err)
})

export default instance;
