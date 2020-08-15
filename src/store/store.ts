import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import { counterReducer } from './reducers';

export interface InitStore {
  [key:string]: any
}
export const initStore:InitStore = {
  count: 0
}

const middlewares = [
  ReduxPromise
]

export const store = createStore(counterReducer, initStore, applyMiddleware(...middlewares));
