import { combineReducers } from 'redux-immutable';

import { reducer as homeReducer } from '@/views/home/store'
import { reducer as playerReducer } from '@/views/player/store'

const reducer = combineReducers({
  home: homeReducer,
  player: playerReducer
});

export default reducer;
