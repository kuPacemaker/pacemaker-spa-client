import { handleActions } from 'redux-actions';
// import { List, Map } from 'immutable';
import produce from 'immer';
import { UPDATE } from '../type/board';

const initialState = {
  leader: [],
  runner: [],
};

export default handleActions(
  {
    [UPDATE]: (state, action) =>
      produce(state, (draft) => {
        draft.leader = action.payload.leader.reverse();
        draft.runner = action.payload.runner.reverse();
      }),
  },
  initialState
);
