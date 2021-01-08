import { combineReducers } from 'redux-immutable';

import { reducer as homeReducer } from './home'
import { reducer as playerReducer } from './player'

const reducer = combineReducers({
  home: homeReducer,
  player: playerReducer
});

export default reducer;
