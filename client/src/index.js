// eslint-disable-next-line import/no-extraneous-dependencies
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import store from './store';
import GameBoard from './modules/GameBoard/index';
import { graphqlClient } from './utils/graphqlClient';

import './style/main.less';

ReactDOM.render((
  <Provider store={store}>
    <ApolloProvider client={graphqlClient}>
      <GameBoard />
    </ApolloProvider>
  </Provider>
), document.getElementById('root'));
