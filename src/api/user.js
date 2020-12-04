import request from '@/utils/request'

const AUTH_API_PREFIX = "api/"
const USER_API_PREFIX = "api/v1/"

export function test() {
  return request({
    url: '/test',
    method: 'get'
  })
}
export function login(data) {
  return request({
    url: AUTH_API_PREFIX+'login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: USER_API_PREFIX+'user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: USER_API_PREFIX+'user/logout',
    method: 'post'
  })
}