import { createAction } from 'redux-actions';
import { UPDATE, UPDATE_DOCUMENT } from '../type/unit';

/**
 * 특정 타입의 오버레이 모달을 보여줌
 */
export const update = createAction(UPDATE, (data) => data);

export const update_document = createAction(UPDATE_DOCUMENT, (data) => data);
