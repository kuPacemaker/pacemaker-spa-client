import { handleActions } from 'redux-actions';
import produce from 'immer';
import { UPDATE, PENDING, SUCCESS } from '../type/channel';

const initialState = {
  state: {
    ready: false,
  },
  data: null,
};

export default handleActions(
  {
    [UPDATE]: (state, action) =>
      produce(state, (draft) => {
        draft.data = action.payload;
      }),
    [PENDING]: (state) =>
      produce(state, (draft) => {
        draft.state.ready = false;
      }),
    [SUCCESS]: (state) =>
      produce(state, (draft) => {
        draft.state.ready = true;
      }),
  },
  initialState
);
