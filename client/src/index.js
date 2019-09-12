// eslint-disable-next-line import/no-extraneous-dependencies
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import GameBoard from './modules/PointsGame/GameBoard/index';

import './style/main.less';

ReactDOM.render((
  <Provider store={store}>
    <GameBoard />
  </Provider>
), document.getElementById('root'));
