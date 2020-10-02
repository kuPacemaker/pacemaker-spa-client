import { combineReducers } from 'redux';
import counter from './counter';
import waiting from './waiting';
import post from './post';
// import { penderReducer } from 'redux-pender';
import { connectRouter } from 'connected-react-router';

export default (history) =>
  combineReducers({
    counter,
    waiting,
    post,
    // pender: penderReducer,
    router: connectRouter(history),
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
  });
