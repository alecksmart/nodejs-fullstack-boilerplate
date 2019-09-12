import React from 'react';
import { Route, Switch } from 'react-router';

import PageNotFound from './components/PageNotFound';
import GameBoard from './modules/PointsGame/GameBoard/index';

const routes = (
  <Switch>
    <Route exact path="/" component={GameBoard} />
    <Route component={PageNotFound} />
  </Switch>
);

export default routes;
