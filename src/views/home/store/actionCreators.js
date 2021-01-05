import * as actionTypes from './actionTypes';
import { createSong } from '@/utils/song'
import { getBanners, getRecommends, getNewAlbums, getNewSongs, getHotSingers } from '@/apis/services/home'
import { getTopMvs } from '../../../apis/services/home';
import { getSongDetail } from '../../../apis/services/player';

// 获取 banner( 轮播图 )
const changeBannerAction = res => ({
  type: actionTypes.GET_BANNERS,
  banners: res.banners
})

export const getBannerAction = () => {
  return dispatch => {
    getBanners().then(res => {
      dispatch(changeBannerAction(res))
    })
  }
}

// 获取推荐歌单
const changeRecommendAction = res => ({
  type: actionTypes.GET_RECOMMENDS,
  recommends: res.result
})

export const getRecommendAction = (limit) => {
  return dispatch => {
    getRecommends(limit).then(res => {
      dispatch(changeRecommendAction(res))
    })
  }
}

// 获取推荐新碟
const changeHotAlbumAction = res => ({
  type: actionTypes.GET_ALBUMS,
  albums: res
})

export const getHotAlbumAction = () => {
  return dispatch => {
    getNewAlbums().then(res => {
      const list = res.albums.slice(0, 8) 
      dispatch(changeHotAlbumAction(list))
    })
  }
}

// 获取推荐新歌
const changeHotSongAction = songs => ({
  type: actionTypes.GET_SONGS,
  songs
})

export const getHotSongAction = () => {
  const timestamp = new Date().valueOf()
  return dispatch => {
    getNewSongs().then(res => {
      const list = res.result.map(item => {
        return item.id
      }).join(',')
      getSongDetail(list, timestamp).then(res => {
        dispatch(changeHotSongAction(_normalizeSongs(res.songs)))
      })      
    })
  }
}

// 处理歌曲
const _normalizeSongs = (list) => {
  let ret = []
  list.forEach(item => {
    if (item.id) {
      ret.push(createSong(item))
    }
  })
  return ret
}

// 获取推荐歌手
const changeHotSingerAction = res => ({
  type: actionTypes.GET_SINGERS,
  singers: res.artists
})

export const getHotSingerAction = () => {
  return dispatch => {
    getHotSingers().then(res => {
      dispatch(changeHotSingerAction(res))
    })
  }
}

// 获取推荐MV
const changeTopMvAction = res => ({
  type: actionTypes.GET_MVS,
  mvs: res.result
})

export const getTopMvAction = () => {
  return dispatch => {
    getTopMvs().then(res => {
      dispatch(changeTopMvAction(res))
    })
  }
}