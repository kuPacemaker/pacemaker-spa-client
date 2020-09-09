import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

// import App from 'shared/App';
import RootRouter from 'routes/RootRouter.js';
import store, { history } from 'store/store';

import HeaderContainer from './header';
import FooterContaioner from './footer';

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HeaderContainer />
      <RootRouter />
      <FooterContaioner />
    </ConnectedRouter>
  </Provider>
);

export default Root;
