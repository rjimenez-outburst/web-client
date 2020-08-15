import { initStore } from '@store/defaultStore';
import { INCREMENT, DECREMENT } from './actions';

export interface Action {
  type: string;
  payload?: any;
}

export const counterReducer = (state = initStore, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
