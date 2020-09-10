import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AboutUs } from 'pages';

const HelpRouter = (prevPath) => {
  return (
    <div>
      <Switch>
        <Route exact path={prevPath + '/newspeeds'} component={AboutUs} />
        <Route exact path={prevPath + '/newspeeds'} component={AboutUs} />
        <Redirect path="/main-page*" to="/main-page/newspeeds" />
      </Switch>
    </div>
  );
};

export default HelpRouter;
