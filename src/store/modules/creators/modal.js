import { createAction } from 'redux-actions';
import { SHOW, HIDE } from '../type/modal';

/**
 * 특정 타입의 오버레이 모달을 보여줌
 */
export const show = createAction(SHOW, (type) => type);

/**
 * 현재 오버레이 모달을 없앰
 */
export const hide = createAction(HIDE);
