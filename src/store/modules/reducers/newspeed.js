import { handleActions } from 'redux-actions';
import produce from 'immer';
import { UPDATE } from '../type/newspeed';

const initialState = {
  data: null,
};

export default handleActions(
  {
    [UPDATE]: (state, action) =>
      produce(state, (draft) => {
        draft.data = action.payload;
      }),
  },
  initialState
);
