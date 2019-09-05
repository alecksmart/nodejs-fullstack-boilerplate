import { createAction } from 'redux-actions';
import actionNames from '../utils/actionNames';

export const pointsGameActions = actionNames([
  'NEW_GAME',
  'CELL_CLICK',
  'GAME_OVER',
]);

export const setNewGame = createAction(pointsGameActions.NEW_GAME);
export const setCellClicked = createAction(pointsGameActions.CELL_CLICK);
export const setGameOver = createAction(pointsGameActions.GAME_OVER);
