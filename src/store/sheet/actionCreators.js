import * as actionTypes from '../player/actionTypes';
import * as sheetActionTypes from './actionTypes';
import { getPlayListDetail, getSubscribersPlaylist, getRelatedPlaylist, getCommentPlaylist } from '@/apis/services/sheet';
import { getSongDetails } from '@/utils/utils';
import { selectPlay, selectPlayList, selectCurrentIndex } from '../player/actionCreators'

// 修改歌曲播放列表
const setPlayList = playList => ({
  type: actionTypes.SET_PLAYLIST,
  playList
})

// 获取歌单详情
const setSheetDetail = sheetDetail => ({
  type: sheetActionTypes.GET_PLAYLIST_DETAIL,
  sheetDetail
})

// 获取歌单收藏者
const setSheetSubscribers = subscribers => ({
  type: sheetActionTypes.GET_PLAYLIST_SUBSCRIBERS,
  subscribers
})

// 获取相关歌单推荐
const setSheetRelated = relateds => ({
  type: sheetActionTypes.GET_PLAYLIST_RELATEDS,
  relateds
})

// 获取歌单评论
const setSheetComments = comments => ({
  type: sheetActionTypes.GET_PLAYLIST_COMMENTS,
  comments
})

// 请求歌单详情
export const getSheetDetail = (id, isPlay) => {
  return dispatch => {
    getPlayListDetail(id).then(async res => {
      if(res.playlist.description !== null) {
        res.playlist.description = res.playlist.description.replace(
          /(\r\n|\n|\r)/gm,
          '<br />'
        )
      }
      let trackIds = res.playlist.trackIds
      let arrLength = 1000
      let sliceArr = []
      for (let i = 0; i < trackIds.length; i += arrLength) {
        sliceArr.push(trackIds.slice(i, i + arrLength))
      }
      dispatch(setSheetDetail(res.playlist))
      const lists = sliceArr[0]
      let songs = await getSongDetails(lists)
      dispatch(setPlayList(songs))
      const newSongs = songs.filter(item => {
        return item.fee === 8 && !item.cs && item.st === 0
      })      
      if (isPlay) {        
        dispatch(selectPlayList(newSongs))
        dispatch(selectCurrentIndex(0))
        dispatch(selectPlay(newSongs, 0))
      }
    })
  }
}

// 获取歌单收藏者
export const getSheetSubscribers = (id) => {
  return dispatch => {
    getSubscribersPlaylist(id).then(res => {
      dispatch(setSheetSubscribers(res.subscribers))
    })
  }
}

// 获取相关歌单推荐
export const getSheetRelateds  = id => {
  return dispatch => {
    getRelatedPlaylist(id).then(res => {
      dispatch(setSheetRelated(res.playlists))
    })
  }
}

// 获取歌单评论
export const getSheetComments = id => {
  return dispatch => {
    getCommentPlaylist(id).then(res => {
      let comments = []
      if (res.hotComments.length > 0) {
        comments = res.hotComments
      } else {
        comments = res.comments
      }
      dispatch(setSheetComments(comments))
    })    
  }
} 