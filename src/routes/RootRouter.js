import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from 'pages';
import Help from './HelpRouter';
import Admission from './AdmissionRouter';
import MainPage from './MainPageRouter';
const RootRouter = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/help" component={Help} />
        <Route path="/admission" component={Admission} />
        <Route path="/main-page" component={MainPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </div>
  );
};

export default RootRouter;
