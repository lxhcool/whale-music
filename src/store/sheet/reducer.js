import { Map } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = Map({
  sheetDetail: {}
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.GET_PLAYLIST_DETAIL:
      return state.set("sheetDetail", action.sheetDetail)
    default:
      return state
  }
}

export default reducer;
