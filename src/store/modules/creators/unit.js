import { createAction } from 'redux-actions';
import {
  UPDATE,
  RESET,
  UPDATE_DOCUMENT,
  UPDATE_QUESTION,
  PENDING,
  SUCCESS,
} from '../type/unit';

export const update = createAction(UPDATE, (data) => ({
  channel: data.channel,
  unit: {
    ...data.unit,
    paper: data.paper,
  },
}));

export const update_document = createAction(UPDATE_DOCUMENT, (data) => data);

export const reset = createAction(RESET);

export const update_question = createAction(UPDATE_QUESTION, (data) => data);

export const pending = createAction(PENDING);

export const success = createAction(SUCCESS);
