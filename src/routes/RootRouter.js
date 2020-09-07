import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';

import HeaderContainer from 'components/header/HeaderContainer';
import FooterContaioner from 'components/footer/FooterContainer';

class RootRouter extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/about/:name" component={About} />
          <Route exact path="/about" component={About} />
        </Switch>
        <FooterContaioner />
      </div>
    );
  }
}

export default RootRouter;
