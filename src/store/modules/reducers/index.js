import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import account from './account';

export default (history) =>
  combineReducers({
    account,
    router: connectRouter(history),
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
  });
