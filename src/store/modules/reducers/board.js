import { handleActions } from 'redux-actions';
// import { List, Map } from 'immutable';
import produce from 'immer';
import { UPDATE } from '../type/board';

const initialState = {
  data: {
    leader: [],
    runner: [],
  },
};

export default handleActions(
  {
    [UPDATE]: (state, action) =>
      produce(state, (draft) => {
        draft.data.leader = action.payload.leader.slice().reverse();
        draft.data.runner = action.payload.runner.slice().reverse();
      }),
  },
  initialState
);
