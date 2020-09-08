import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';

class RootRouter extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/about/:name" component={About} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default RootRouter;
