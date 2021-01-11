import http from '../http';

// 获取所有歌曲详情
export function getSongDetail(ids, time) {
  return http({
    url: `/song/detail?timestamp=${time}`,
    method: 'POST',
    params: {
      ids
    }
  })
}
