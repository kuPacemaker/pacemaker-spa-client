import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Newsfeed, Board, Channel, Unit, Documents } from 'pages';
import { LocalMainPage } from 'common/local-path';

const MainPageRouter = ({ location }) => {
  return (
    <>
      <Switch>
        <Route exact path={LocalMainPage.newsfeed.path} component={Newsfeed} />
        <Route exact path={LocalMainPage.board.path} component={Board} />
        <Route exact path={LocalMainPage.channel.path} component={Channel} />
        <Route exact path={LocalMainPage.unit.path} component={Unit} />
        <Route
          exact
          path={LocalMainPage.documents.path}
          component={Documents}
        />
        <Redirect
          path={LocalMainPage.root + '*'}
          to={LocalMainPage.newsfeed.path}
        />
      </Switch>
    </>
  );
};

export default MainPageRouter;
