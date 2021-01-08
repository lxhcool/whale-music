import { Map } from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = Map({
  banners: [],
  recommends: [],
  albums: [],
  songs: [],
  singers: [],
  mvs: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.GET_BANNERS:
      return state.set("banners", action.banners)
    case actionTypes.GET_RECOMMENDS:
      return state.set("recommends", action.recommends)
    case actionTypes.GET_ALBUMS:
      return state.set("albums", action.albums)
    case actionTypes.GET_SONGS:
      return state.set("songs", action.songs)
    case actionTypes.GET_SINGERS:
      return state.set("singers", action.singers)
    case actionTypes.GET_MVS:
      return state.set("mvs", action.mvs)
    default:
      return state
  }
}

export default reducer
