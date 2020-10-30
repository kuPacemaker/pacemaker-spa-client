import { createAction } from 'redux-actions';
import { CHANGE_INPUT, CREATE, ENTER, LEAVE } from '../type/waiting';
// createAction 으로 액션 만들기
let id = 3;
export const changeInput = createAction(CHANGE_INPUT, (text) => text);
export const create = createAction(CREATE, (text) => ({ text, id: id++ }));
export const enter = createAction(ENTER, (id) => id);
export const leave = createAction(LEAVE, (id) => id);
