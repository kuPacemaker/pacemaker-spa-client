import { createAction } from 'redux-actions';
import { GET } from '../type/board';

/**
 * 특정 타입의 오버레이 모달을 보여줌
 */
export const get = createAction(GET, (data) => ({
  leader: data.leader,
  runner: data.runner,
}));
