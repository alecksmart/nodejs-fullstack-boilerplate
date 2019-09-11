import { combineReducers } from 'redux';
import user from './user';
import highscore from './highscore';
import pointsGame from './pointsGame';

export default combineReducers({
  user,
  highscore,
  pointsGame,
});
