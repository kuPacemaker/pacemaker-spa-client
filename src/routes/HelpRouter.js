import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AboutUs, Contact } from 'pages';
import { LocalHelp } from 'common/local-path';

const HelpRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path={LocalHelp.aboutus} component={AboutUs} />
        <Route exact path={LocalHelp.contact} component={Contact} />
        <Redirect exact path={LocalHelp.root} to={LocalHelp.aboutus} />
      </Switch>
    </>
  );
};

export default HelpRouter;
