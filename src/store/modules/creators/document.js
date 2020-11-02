import { createAction } from 'redux-actions';
import { TFIDF } from '../type/document';

export const update_tfidf = createAction(TFIDF, (data) => data);
