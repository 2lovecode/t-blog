import request from '@/utils/request'
import  Common from '@/api/common'

const c = new Common

export function fetchAbout(query) {
  return request({
    url: c.FrontendApiPrefix+'about',
    method: 'get',
    params: query
  })
}