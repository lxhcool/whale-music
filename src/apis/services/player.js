import http from '../http';

export function getSongDetail(ids, time) {
  return http({
    url: `song/detail?timestamp=${time}`,
    method: 'POST',
    params: {
      ids
    }
  })
}