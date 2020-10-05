import { handleActions } from 'redux-actions';
import produce from 'immer';
import { UPDATE } from '../type/newspeed';

const initialState = {
  peeds: null,
}

export default handleActions(
  {
    [UPDATE]: (state, action) =>
      produce(state, (draft) => {
        draft.peeds = action.payload;
      }),
  },
  initialState
);
