import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import store, { history } from 'store/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </ConnectedRouter>
  </Provider>
);

export default Root;
