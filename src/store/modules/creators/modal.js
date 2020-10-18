import { createAction } from 'redux-actions';
import { SHOW, HIDE, ACTIVE, SLEEP } from '../type/modal';

/**
 * 특정 타입의 오버레이 모달을 보여줌
 */
export const show = createAction(SHOW, (type) => type);

/**
 * 현재 오버레이 모달을 없앰
 */
export const hide = createAction(HIDE);

export const active = createAction(ACTIVE);

export const sleep = createAction(SLEEP);
