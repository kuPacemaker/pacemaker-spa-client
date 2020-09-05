import { createAction } from 'redux-actions';
import { CHANGE_COLOR, INCREMENT, DECREMENT } from '../type/counter';

// 액션 생섬함수 정의
export const changeColor = createAction(CHANGE_COLOR, (color) => color);
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export const incrementAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, 250);
};

export const decrementAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrement());
  }, 250);
};

export default {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
};
