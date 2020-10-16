import { handleActions } from 'redux-actions';
// import { List, Map } from 'immutable';
import produce from 'immer';
import { SHOW, HIDE } from '../type/modal';

const initialState = {
  visible: true,
  type: 'QA',
};

export default handleActions(
  {
    [SHOW]: (state, action) =>
      produce(state, (draft) => {
        draft.visible = true;
        draft.type = action.payload;
      }),
    [HIDE]: (state) =>
      produce(state, (draft) => {
        draft.visible = false;
        draft.type = '';
      }),
  },
  initialState
);
