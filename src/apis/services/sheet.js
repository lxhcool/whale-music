import http from '../http';

// 获取歌单详情
export function getPlayListDetail(id, s=100) {
  let timestamp = new Date().valueOf()
  return http({
    url: `/playlist/detail?id=${id}&s=${s}&timestamp=${timestamp}`
  })
}