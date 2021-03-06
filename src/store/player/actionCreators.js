import * as actionTypes from './actionTypes';
import { getRandomInt } from '@/utils/utils'
import { playMode } from '@/model/playConfig'

// 设置播放列表
const setPlayList = playList => ({
  type: actionTypes.SET_PLAYLIST,
  playList
})

// 设置顺序播放列表
const setSequenceList = sequenceList => ({
  type: actionTypes.SET_SEQUENCE_LIST,
  sequenceList
})

// 设置播放索引
const setCurrentIndex = currentIndex => ({
  type: actionTypes.SET_CURRENT_INDEX,
  currentIndex
})

// 设置播放状态
const setPlayingState = playingState => ({
  type: actionTypes.SET_PLAYING_STATE,
  playingState
})

// 设置当前播放歌曲
const setCurrentSong = currentSong => ({
  type: actionTypes.SET_CURRENT_SONG,
  currentSong
})

// 设置播放模式
const setPlayMode = playMode => ({
  type: actionTypes.SET_PLAY_MODE,
  playMode
})

// 点击单个播放
export const selectPlay = (lists, index) => {
  return dispatch => {
    dispatch(setSequenceList(lists))
    dispatch(setPlayList(lists))
    dispatch(setCurrentIndex(index))
    dispatch(setPlayingState(true))
    dispatch(setCurrentSong(lists[index]))
  }
}

// 播放全部
// export const selectplayAll = (list) => {
//   return (dispatch) => {
//     dispatch(selectCurrentSong(1))
//   }
// }

// 点击切换播放模式
export const selectPlayMode = (mode) => {
  return (dispatch, getState) => {
    dispatch(setPlayMode(mode))
  }
}

// 切换播放/暂停状态
export const selectPlayState = (state) => {
  return dispatch => {
    dispatch(setPlayingState(state))
  }
}

// 设置播放索引
export const selectCurrentIndex = index => {
  return (dispatch, getState) => {
    const songs = getState().getIn(["player", "playList"])
    dispatch(setCurrentIndex(index))
    dispatch(setCurrentSong(songs[index]))
  }
}

// 设置当前播放歌曲
export const selectCurrentSong = (tag, isAll = false) => {
  return (dispatch, getState) => {
    const mode = getState().getIn(["player", "playMode"])
    const playList = getState().getIn(["player", "playList"])
    let currentIndex = getState().getIn(["player", "currentIndex"])
    // debugger;
    if (mode === playMode.random) {
      // 随机
      let randomIndex = getRandomInt(0, playList.length)
      while (randomIndex === currentIndex) {
        randomIndex = getRandomInt(0, playList.length)
      }
      currentIndex = randomIndex
    } else {
      currentIndex += tag
      if (currentIndex >= playList.length) {
        currentIndex = 0
      }
      if (currentIndex < 0) {
        currentIndex = playList.length - 1
      }
    }
    if(isAll) {
      currentIndex = 0
    }
    dispatch(setCurrentSong(playList[currentIndex]))
    dispatch(setCurrentIndex(currentIndex))
    dispatch(setPlayingState(true))
  }
}

// 设置播放列表
export const selectPlayList = list => {
  return dispatch => {
    dispatch(setPlayList(list))
  }
}
