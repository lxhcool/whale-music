import { Map } from 'immutable'

import * as actionTypes from './actionTypes'

const defaultState = Map({
  banners: [],
  recommends: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.GET_BANNERS:
      return state.set("banners", action.banners)
    case actionTypes.GET_RECOMMENDS:
      return state.set("recommends", action.recommends)
    default:
      return state
  }
}

export default reducer
