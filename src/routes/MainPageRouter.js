import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Newspeed, Board } from 'pages';
import { LocalMainPage } from 'local-path';

const MainPageRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path={LocalMainPage.newspeed} component={Newspeed} />
        <Route exact path={LocalMainPage.board.path} component={Board} />
        <Route exact path={LocalMainPage.channel} component={Newspeed} />
        <Route exact path={LocalMainPage.unit} component={Newspeed} />
        <Route exact path={LocalMainPage.documents} component={Newspeed} />
        <Route exact path={LocalMainPage.statistics} component={Newspeed} />
        <Redirect path={LocalMainPage.root + '*'} to={LocalMainPage.newspeed} />
      </Switch>
    </div>
  );
};

export default MainPageRouter;
