import { handleActions } from 'redux-actions';
import produce from 'immer';
import { UPDATE } from '../type/channel';

const initialState = {
  channelData: null,
};

export default handleActions(
  {
    [UPDATE]: (state, action) =>
      produce(state, (draft) => {
        draft.channelData = action.payload;
      }),
  },
  initialState
);
