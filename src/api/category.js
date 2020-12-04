import request from '@/utils/request'
import  Common from '@/api/common'

const c = new Common

export function fetchCategories(query) {
  return request({
    url: c.FrontendApiPrefix+'categories',
    method: 'get',
    params: query
  })
}