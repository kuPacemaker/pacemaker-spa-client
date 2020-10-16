import { handleActions } from 'redux-actions';
import produce from 'immer';
import { UPDATE_QUESTION, UPDATE_ANSWER, RESET } from '../type/qa';

const initialState = {
  question: '',
  answer: '',
};

export default handleActions(
  {
    [RESET]: (state) =>
      produce(state, (draft) => {
        [draft.question, draft.answer] = ['', ''];
      }),
    [UPDATE_QUESTION]: (state, action) =>
      produce(state, (draft) => {
        draft.question = action.payload;
      }),
    [UPDATE_ANSWER]: (state, action) =>
      produce(state, (draft) => {
        draft.answer = action.payload;
      }),
  },
  initialState
);
