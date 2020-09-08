import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, AboutUs } from 'pages';

class RootRouter extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/about-us/:name" component={AboutUs} />
          <Route exact path="/about-us" component={AboutUs} />
        </Switch>
      </div>
    );
  }
}

export default RootRouter;
