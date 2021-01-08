import * as actionTypes from '../player/actionTypes';
import * as sheetActionTypes from './actionTypes';
import { getPlayListDetail } from '@/apis/services/sheet';
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

export const getSheetDetail = (id, isPlay) => {
  return dispatch => {
    getPlayListDetail(id).then(async res => {
      console.log(res)
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