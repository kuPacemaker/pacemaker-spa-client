import { createAction } from 'redux-actions';
import { UPDATE } from '../type/newsfeed';

export const update = createAction(UPDATE, (data) => data);
