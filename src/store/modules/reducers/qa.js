import { handleActions } from 'redux-actions';
import produce from 'immer';
import { UPDATE_QUESTION, UPDATE_ANSWER, RESET } from '../type/qa';

const initialState = {
  data: {
    question: '',
    answer: '',
  },
};

export default handleActions(
  {
    [RESET]: (state) =>
      produce(state, (draft) => {
        [draft.data.question, draft.data.answer] = ['', ''];
      }),
    [UPDATE_QUESTION]: (state, action) =>
      produce(state, (draft) => {
        draft.data.question = action.payload;
      }),
    [UPDATE_ANSWER]: (state, action) =>
      produce(state, (draft) => {
        draft.data.answer = action.payload;
      }),
  },
  initialState
);
