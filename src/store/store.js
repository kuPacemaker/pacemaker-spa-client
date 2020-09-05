// createStore 와 루트 리듀서 불러오기
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import Thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from './modules/reducers';
// import pender from 'redux-pender';

// import logger from '../lib/loggerMiddleware';
// 리덕스 개발자도구 적용
// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
// const store = createStore(rootReducer, devTools);

export const history = createBrowserHistory();

const logger = createLogger();
const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history), Thunk, logger))
);

export default store;
