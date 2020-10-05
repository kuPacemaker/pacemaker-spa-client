import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import account from './account';
import modal from './modal';
import board from './board';
import unit from './unit';

export default (history) =>
  combineReducers({
    account,
    modal,
    board,
    unit,
    router: connectRouter(history),
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
  });
