import { combineReducers } from 'redux-immutable';

import { reducer as homeReducer } from './home'
import { reducer as playerReducer } from './player'
import { reducer as sheetReducer } from './sheet'

const reducer = combineReducers({
  home: homeReducer,
  player: playerReducer,
  sheet: sheetReducer
});

export default reducer;
