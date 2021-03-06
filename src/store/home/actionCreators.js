import * as actionTypes from './actionTypes';
import { getBanners, getRecommends, getNewAlbums, getNewSongs, getHotSingers, getTopMvs } from '@/apis/services/home'
import { getSongDetails } from '@/utils/utils'

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
  return dispatch => {
    getNewSongs().then(async res => {
      const songs = await getSongDetails(res.result)
      dispatch(changeHotSongAction(songs))
    })
  }
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