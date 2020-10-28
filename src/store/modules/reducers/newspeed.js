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
        console.log(action.payload);
        draft.data = action.payload.slice().reverse();
      }),
  },
  initialState
);
