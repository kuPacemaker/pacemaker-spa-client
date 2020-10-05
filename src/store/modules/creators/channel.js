import { createAction } from 'redux-actions';
import { UPDATE } from '../type/channel';

export const update = createAction(UPDATE, (data) => data);
