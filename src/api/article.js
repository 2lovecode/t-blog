import request from '@/utils/request'
import  Common from '@/api/common'

const c = new Common

export function fetchList(query) {
  return request({
    url: c.FrontendApiPrefix+'article-list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: c.FrontendApiPrefix+'article',
    method: 'get',
    params: { id }
  })
}

export function createArticle(data) {
  return request({
    url: c.FrontendApiPrefix+'article',
    method: 'post',
    data
  })
}

export function updateArticle(id, data) {
  return request({
    url: c.FrontendApiPrefix+'article',
    method: 'put',
    params: { id },
    data
  })
}
