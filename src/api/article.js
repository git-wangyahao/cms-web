import request from '@/utils/wyh_request'
export function creatArticle(data) {
  return request({
    url: '/article/createArticle',
    method: 'post',
    data
  })
}


export function getDataApi(params) {
  return request({
    url: '/article/getArticleByShowPage',
    method: 'get',
    params
  })
}

