import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { SignIn, SignUp, FindAccount } from 'pages';
import { LocalAdmission } from 'common/local-path';

const AdmissionRounter = () => {
  return (
    <div>
      <Switch>
        <Route exact path={LocalAdmission.root} component={SignIn} />
        <Route exact path={LocalAdmission.signup} component={SignUp} />
        <Route
          exact
          path={LocalAdmission.foutaccount}
          component={FindAccount}
        />
        <Redirect path={LocalAdmission.root + '*'} to={LocalAdmission.root} />
      </Switch>
    </div>
  );
};

export default AdmissionRounter;
