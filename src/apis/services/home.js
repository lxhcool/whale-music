import http from '../http';

// 获取 banner( 轮播图 )
export function getBanners() {
  return http({
    url: "/banner"
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

// 获取新碟上架
export function getNewAlbums() {
  return http({
    url: "/album/newest",
  })
}

// 获取推荐新歌
export function getNewSongs() {
  return http({
    url: "/personalized/newsong"
  })
}

// 获取热门歌手
export function getHotSingers() {
  return http({
    url: "/top/artists?offset=0&limit=30"
  })
}