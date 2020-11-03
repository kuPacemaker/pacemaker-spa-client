import { handleActions } from 'redux-actions';
import produce from 'immer';
import { UPDATE_NOUNS } from '../type/document';

const initialState = {
  state: {
    ready: false,
  },
  data: {
    nouns: ['god', 'God'],
  },
};

export default handleActions(
  {
    [UPDATE_NOUNS]: (state, action) =>
      produce(state, (draft) => {
        draft.data.nouns = action.payload;
      }),
  },
  initialState
);
