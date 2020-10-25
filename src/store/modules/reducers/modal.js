import { handleActions } from 'redux-actions';
// import { List, Map } from 'immutable';
import produce from 'immer';
import { SHOW, HIDE, ACTIVE, SLEEP } from '../type/modal';

const initialState = {
  visible: false,
  type: '',
  argument: undefined,
  active: true,
};

export default handleActions(
  {
    [SHOW]: (state, action) =>
      produce(state, (draft) => {
        draft.visible = true;
        draft.active = true;
        draft.type = action.payload.type;
        if (action.payload.argument) draft.argument = action.payload.argument;
      }),
    [HIDE]: (state) =>
      produce(state, (draft) => {
        draft.visible = false;
        draft.type = '';
        if (draft.argument) draft.argument = undefined;
      }),
    [ACTIVE]: (state) =>
      produce(state, (draft) => {
        draft.active = true;
      }),
    [SLEEP]: (state) =>
      produce(state, (draft) => {
        draft.active = false;
      }),
  },
  initialState
);
