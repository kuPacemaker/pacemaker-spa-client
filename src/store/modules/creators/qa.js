import { createAction } from 'redux-actions';
import { UPDATE_ANSWER, UPDATE_QUESTION, RESET } from '../type/qa';

export const update_question = createAction(
  UPDATE_QUESTION,
  (question) => question
);
export const update_answer = createAction(UPDATE_ANSWER, (answer) => answer);

export const reset = createAction(RESET, null);
