import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AboutUs } from 'pages';
import { LocalHelp } from 'common/local-path';

const HelpRouter = () => {
  console.log(LocalHelp);
  return (
    <>
      <Switch>
        <Route exact path={LocalHelp.aboutus} component={AboutUs} />
        <Route exact path={LocalHelp.contact} component={AboutUs} />
        <Redirect exact path={LocalHelp.root} to={LocalHelp.aboutus} />
      </Switch>
    </>
  );
};

export default HelpRouter;
