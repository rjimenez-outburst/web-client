import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import { initStore } from '@store/defaultStore';
import { counterReducer } from './reducers';

const middlewares = [ReduxPromise];

export const store = createStore(
  counterReducer,
  initStore,
  applyMiddleware(...middlewares)
);
