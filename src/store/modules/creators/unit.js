import { createAction } from 'redux-actions';
import { GET } from '../type/unit';

/**
 * 특정 타입의 오버레이 모달을 보여줌
 */
export const get = createAction(GET, (data) => data);
