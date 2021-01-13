import http from '../http';

// 获取歌单详情
export function getPlayListDetail(id) {
  let timestamp = new Date().valueOf()
  return http({
    url: `/playlist/detail?id=${id}&timestamp=${timestamp}`
  })
}

/**
 * @method 歌单收藏者
 * @params id 歌单 id
 * @params limit 取出评论数量 默认为 20
 * @params offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
*/

export function getSubscribersPlaylist(id) {
  return http({
    url: `/playlist/subscribers?id=${id}&limit=28&offset=0`
  })
}

/**
 * @method 相关歌单推荐
 */

export function getRelatedPlaylist(id) {
  return http({
    url: `/related/playlist?id=${id}`
  })
}

/**
 * @method 歌单评论
 * @params id 歌单 id
 * @params limit 取出评论数量 默认为 20
 * @params offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @params before 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 */

export function getCommentPlaylist(id) {
  return http({
    url: `/comment/playlist?id=${id}&limit=10&offset=0`
  })
}
