import * as actionTypes from './actionTypes';
import { shuffle, findIndex } from '@/utils/utils'
import { playMode } from '@/common/playConfig'
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
export const selectPlayAction = (songs, index) => {
  return (dispatch, getState) => {
    const mode = getState().getIn(["player", "playMode"])
    dispatch(setSequenceList(songs))
    if (mode === playMode.random) {
      let randomList = shuffle(songs)
      dispatch(setPlayList(randomList))
      index = findIndex(randomList, songs[index])
    } else {
      dispatch(setPlayList(songs))
    }
    dispatch(setCurrentIndex(index))
    dispatch(setPlayingState(true))
    dispatch(setCurrentSong(songs[index]))
  }
}

// 点击切换播放模式
export const selectPlayModeAction = (mode) => {
  console.log(mode)
  return dispatch => {
    dispatch(setPlayMode(mode))
  }
}

// export const selectPlay = function({ commit, state }, { list, index }) {
  // commit(types.SET_SEQUENCE_LIST, list)
  // if (state.mode === playMode.random) {
  //   let randomList = utils.shuffle(list)
  //   commit(types.SET_PLAYLIST, randomList)
  //   index = findIndex(randomList, list[index])
  // } else {
  //   commit(types.SET_PLAYLIST, list)
  // }
  // commit(types.SET_CURRENT_INDEX, index)
  // commit(types.SET_PLAYING_STATE, true)
// }

// // 播放全部
// export const playAll = function({ commit }, { list }) {
//   console.log(list)
//   commit(types.SET_PLAY_MODE, playMode.sequence)
//   commit(types.SET_SEQUENCE_LIST, list)
//   commit(types.SET_PLAYLIST, list)
//   commit(types.SET_CURRENT_INDEX, 0)
//   commit(types.SET_PLAYING_STATE, true)
// }

// // 暂停播放
// export const pausePlay = function({ commit }) {
//   commit(types.SET_PLAYING_STATE, false)
// }