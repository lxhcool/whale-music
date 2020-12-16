import { combineReducers } from 'redux-immutable';

import { reducer as homeReducer } from '@/views/home/store'

const reducer = combineReducers({
  home: homeReducer
});

export default reducer;
