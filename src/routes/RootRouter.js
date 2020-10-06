import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from 'pages';
import Help from './HelpRouter';
import Admission from './AdmissionRouter';
import MainPage from './MainPageRouter';
import LocalPath from 'common/local-path';
const RootRouter = () => {
  return (
    <>
      <Route exact path={LocalPath.root} component={Home} />
      <Switch>
        <Route path={LocalPath.help.root} component={Help} />
        <Route path={LocalPath.admission.root} component={Admission} />
        <Route path={LocalPath.main.root} component={MainPage} />
        <Redirect path="*" to={LocalPath.root} />
      </Switch>
    </>
  );
};

export default RootRouter;
