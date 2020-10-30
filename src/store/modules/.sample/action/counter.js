import { increment, decrement } from '../creators/counter';

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
  incrementAsync,
  decrementAsync,
};
