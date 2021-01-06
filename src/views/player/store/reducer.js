import { Map } from 'immutable'
import { playMode } from '@/common/playConfig'
import * as actionTypes from './actionTypes'

const defaultState = Map({
  // 播放状态
  playingState: false,
  // 播放列表
  playList: [],
  // 顺序播放列表
  sequenceList: [],
  // 播放模式
  playMode: playMode.sequence,
  // 当前播放索引
  currentIndex: -1,
  // 当前播放歌曲
  currentSong: {}
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.SET_PLAYING_STATE:
      return state.set("playingState", action.playingState)
    case actionTypes.SET_PLAYLIST:
      return state.set("playList", action.playList);
    case actionTypes.SET_SEQUENCE_LIST:
      return state.set("sequenceList", action.sequenceList);
    case actionTypes.SET_PLAY_MODE:
      return state.set("playMode", action.playMode);
    case actionTypes.SET_CURRENT_INDEX:
      return state.set("currentIndex", action.currentIndex);
    case actionTypes.SET_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    default:
      return state
  }
}

export default reducer;
