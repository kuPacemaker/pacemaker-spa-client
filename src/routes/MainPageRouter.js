import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AboutUs } from 'pages';
import { LocalMainPage } from 'local-path';

const MainPageRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path={LocalMainPage.newspeed} component={AboutUs} />
        <Route exact path={LocalMainPage.newspeed} component={AboutUs} />
        <Redirect path={LocalMainPage.root + '*'} to={LocalMainPage.newspeed} />
      </Switch>
    </div>
  );
};

export default MainPageRouter;
