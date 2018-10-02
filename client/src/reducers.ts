import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import ping from './modules/ping/ping.reducers';

// Types
import { Store } from './store.d';

export const reducers: Reducer<Store> = combineReducers<Store>({
  routing: routerReducer,
  toastr: toastrReducer,
  ping,
});
