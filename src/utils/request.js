import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_DOMAIN,
  headers: {'Access-Control-Allow-Origin' : "*"},
  timeout: 10000 
})

// request interceptor
service.interceptors.request.use(
  config => {

    if (store.getters.token) {
      config.headers['TankBlog-Token'] = 'Bearer '+getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200000) {
      console.log(res.code)
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    if (error.response && error.response.status == 401) {
      let msg = "Some error happend"
      if (error.response.data != undefined) {
        msg = error.response.data.msg
      }
      MessageBox.confirm(msg+', Maybe you can try to log in again', 'Confirm logout', {
        confirmButtonText: 'Re-Login',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          router.push('/login')
        })
      })
    } else {
      console.log('err' + error) // for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  }
)

export default service
