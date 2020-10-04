import { handleActions } from 'redux-actions';
// import { List, Map } from 'immutable';
import produce from 'immer';
import { SIGNIN, SIGNOUT } from '../type/account';

const initialState = {
  id: '',
  name: '',
  type: '',
  token: '',
};

export default handleActions(
  {
    [SIGNIN]: (state, action) =>
      produce(state, (draft) => {
        [draft.id, draft.name, draft.type, draft.token] = [
          action.payload.id,
          action.payload.name,
          action.payload.type,
          action.payload.token,
        ];
      }),
    [SIGNOUT]: (state) =>
      produce(state, (draft) => {
        [draft.id, draft.name, draft.type, draft.token] = ['', '', '', ''];
      }),
  },
  initialState
);
