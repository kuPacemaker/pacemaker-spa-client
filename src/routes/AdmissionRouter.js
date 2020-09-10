import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { SignIn, SignUp, FindAccount, AboutUs } from 'pages';

const AdmissionRounter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admission" component={SignIn} />
        <Route exact path="/admission/sign-up" component={SignUp} />
        <Route exact path="/admission/find-account" component={FindAccount} />
        <Redirect path="/admission*" to="/admission" />
      </Switch>
    </div>
  );
};

export default AdmissionRounter;
