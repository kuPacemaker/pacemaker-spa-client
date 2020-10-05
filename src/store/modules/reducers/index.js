import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import account from './account';
import board from './board';
import channel from './channel';
import modal from './modal';
import newspeed from './newspeed';

export default (history) =>
  combineReducers({
    account,
    board,
    channel,
    modal,
    newspeed,
    router: connectRouter(history),
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
  });
