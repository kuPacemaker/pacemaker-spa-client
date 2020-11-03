import { createAction } from 'redux-actions';
import { UPDATE_NOUNS } from '../type/document';

export const update_nouns = createAction(UPDATE_NOUNS, (data) => data);
