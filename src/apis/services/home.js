import http from '../http';

// 获取 banner( 轮播图 )
export function getBanners() {
  return http({
    url: "banner"
  })
}

// 获取推荐歌单
export function getRecommends(limit) {
  return http({
    url: "/personalized",
    params: {
      limit
    }
  })
}