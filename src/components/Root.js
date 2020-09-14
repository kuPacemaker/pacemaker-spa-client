import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from 'store/store';

import { RootPage } from 'pages';

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RootPage />
    </ConnectedRouter>
  </Provider>
);

export default Root;
