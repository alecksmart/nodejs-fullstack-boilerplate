import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import user from './user';
import highscore from './highscore';
import pointsGame from './pointsGame';

const rootReducer = (history) => combineReducers({
  user,
  highscore,
  pointsGame,
  router: connectRouter(history),
});

export default rootReducer;