import { handleActions } from 'redux-actions';
import produce from 'immer';
import { TFIDF } from '../type/document';

const initialState = {
  state: {
    ready: false,
  },
  data: {
    tfidf: null,
  },
};

export default handleActions(
  {
    [TFIDF]: (state, action) =>
      produce(state, (draft) => {
        draft.data.tfidf = action.payload;
      }),
  },
  initialState
);
