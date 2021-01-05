import * as actionTypes from './actionTypes';
import { getSongDetail } from '@/apis/services/player'


// 获取歌曲详情
const changeSongDetailAction = res => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: res
})

export const getSongDetailAction = ids => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeSongDetailAction(res.songs[0]))
    })
  }
}


// 点击单个播放
// const selectPlay = playList => ({
//   type: actionTypes.SET_PLAYLIST,
//   playList
// })

// export const selectPlayAction = 

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