import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Newspeed, Board, Channel, Unit } from 'pages';
import { LocalMainPage } from 'local-path';

const MainPageRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path={LocalMainPage.newspeed} component={Newspeed} />
        <Route exact path={LocalMainPage.board.path} component={Board} />
        <Route exact path={LocalMainPage.channel.path} component={Channel} />
        <Route exact path={LocalMainPage.unit.path} component={Unit} />
        <Route exact path={LocalMainPage.documents.path} component={Newspeed} />
        <Route
          exact
          path={LocalMainPage.statistics.path}
          component={Newspeed}
        />
        <Redirect path={LocalMainPage.root + '*'} to={LocalMainPage.newspeed} />
      </Switch>
    </div>
  );
};

export default MainPageRouter;
