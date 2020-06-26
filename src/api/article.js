import request from '@/utils/request'

const uri = process.env.VUE_APP_BASE_API_URI

export function fetchList(query) {
  return request({
    url: uri+'/articles',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: uri+'/article',
    method: 'get',
    params: { id }
  })
}

export function createArticle(data) {
  return request({
    url: uri+'/article',
    method: 'post',
    data
  })
}

export function updateArticle(id, data) {
  return request({
    url: uri+'/article',
    method: 'put',
    params: { id },
    data
  })
}
