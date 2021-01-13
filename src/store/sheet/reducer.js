import { Map } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = Map({
  sheetDetail: {},
  subscribers: [],
  relateds: [],
  comments: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.GET_PLAYLIST_DETAIL:
      return state.set("sheetDetail", action.sheetDetail)
    case actionTypes.GET_PLAYLIST_SUBSCRIBERS:
      return state.set("subscribers", action.subscribers)
    case actionTypes.GET_PLAYLIST_RELATEDS:
      return state.set("relateds", action.relateds)
    case actionTypes.GET_PLAYLIST_COMMENTS:
      return state.set("comments", action.comments)
    default:
      return state
  }
}

export default reducer;
