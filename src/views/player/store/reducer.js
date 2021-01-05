import { Map } from 'immutable'
import { playMode } from '@/common/playConfig'
import * as actionTypes from './actionTypes'

const defaultState = Map({
  // 播放状态
  playing: false,
  // 播放列表
  playList: [],
  // 顺序播放列表
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  // 当前播放索引
  currentIndex: -1,
  // 当前播放歌曲 ？？？
  currentSong: {}
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.SET_PLAYLIST:
      return state.set("playList", action.playList);
    case actionTypes.SET_CURRENT_INDEX:
      return state.set("currentIndex", action.currentIndex);
    default:
      return state
  }
}

export default reducer;
