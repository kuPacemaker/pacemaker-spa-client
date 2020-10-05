import { handleActions } from 'redux-actions';
// import { List, Map } from 'immutable';
import produce from 'immer';
import { GET } from '../type/board';

const initialState = {
  leader: [],
  runner: [],
};

export default handleActions(
  {
    [GET]: (state, action) =>
      produce(state, (draft) => {
        draft.leader = action.payload.leader;
        draft.runner = action.payload.runner;
      }),
  },
  initialState
);
