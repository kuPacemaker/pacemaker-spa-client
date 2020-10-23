import { handleActions } from 'redux-actions';
// import { List, Map } from 'immutable';
import produce from 'immer';
import { SIGNIN, SIGNOUT } from '../type/account';

const initialState = {
  id: null,
  name: null,
  type: null,
  token: null,
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
        localStorage.removeItem('account');
        [draft.id, draft.name, draft.type, draft.token] = ['', '', '', ''];
      }),
  },
  initialState
);
