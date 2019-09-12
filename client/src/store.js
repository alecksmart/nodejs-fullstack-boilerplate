import { createMemoryHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducers';
import rootSaga from './sagas';

export const history = createMemoryHistory();

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  createRootReducer(history),
  composeEnhancers(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
