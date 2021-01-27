import request from '@/utils/request'
import  Common from '@/api/common'

const c = new Common

export function fetchTags(query) {
  return request({
    url: c.FrontendApiPrefix+'tag-list',
    method: 'get',
    params: query
  })
}