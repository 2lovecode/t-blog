import request from '@/utils/request'
import  Common from '@/api/common'

const c = new Common
export function test() {
  return request({
    url: '/test',
    method: 'get'
  })
}
export function login(data) {
  return request({
    url: c.AuthApiPrefix+'login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: c.FrontendApiPrefix+'user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: c.FrontendApiPrefix+'user/logout',
    method: 'post'
  })
}