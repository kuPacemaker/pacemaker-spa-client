import { createAction } from 'redux-actions';
import {
  GET_POST_PENDING,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
} from '../type/post';

// createAction 으로 액션 만들기
export const pending = createAction(GET_POST_PENDING);
export const success = createAction(GET_POST_SUCCESS, (response) => response);
export const failure = createAction(GET_POST_FAILURE, (error) => error);
