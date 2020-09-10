import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AboutUs } from 'pages';

const HelpRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/help/about-us" component={AboutUs} />
        <Route exact path="/help/connect" component={AboutUs} />
        <Redirect exact path="/help*" to="/help/about-us" />
      </Switch>
    </div>
  );
};

export default HelpRouter;
