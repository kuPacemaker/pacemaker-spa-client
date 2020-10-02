// createStore 와 루트 리듀서 불러오기
import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from './modules/reducers';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history), Thunk))
);

export default store;
