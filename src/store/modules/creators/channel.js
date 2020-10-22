import { createAction } from 'redux-actions';
import { UPDATE, SUCCESS, PENDING } from '../type/channel';

export const update = createAction(UPDATE, (data) => data);
export const success = createAction(SUCCESS);
export const pending = createAction(PENDING);
