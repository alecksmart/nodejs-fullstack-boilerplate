import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import store from './store';
import GameBoard from './modules/GameBoard/index';

import './style/main.less';

ReactDOM.render((
  <Provider store={store}>
    <GameBoard />
  </Provider>
), document.getElementById('root'));
