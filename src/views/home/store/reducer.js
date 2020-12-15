import * as actionTypes from './actionTypes'

const defaultState = {
  banners: []
}

function reducer(state=defaultState, action) {
  switch(action.type) {
    case actionTypes.GET_BANNERS:
      return {
        ...state,
        banners: []
      }
    default:
      return state
  }
}

export default reducer
