import { createAction } from 'redux-actions';
import actionNames from '../utils/actionNames';

export const highscoreActions = actionNames([
  'FETCH_HIGHSCORES_REQUESTED',
  'FETCH_HIGHSCORES_SUCCEDED',
  'FETCH_HIGHSCORES_FAILED',

  'PUSH_HIGHSCORE_REQUESTED',
  'PUSH_HIGHSCORE_SUCCEDED',
  'PUSH_HIGHSCORE_FAILED',
]);

export const fetchHighcoreRequested = createAction(highscoreActions.FETCH_HIGHSCORES_SUCCEDED);
export const fetchHighcoreSucceded = createAction(highscoreActions.FETCH_HIGHSCORES_REQUESTED);
export const fetchHighcoreFailed = createAction(highscoreActions.FETCH_HIGHSCORES_FAILED);

export const pushHighcoreRequested = createAction(highscoreActions.PUSH_HIGHSCORE_REQUESTED);
export const pushHighcoreSucceded = createAction(highscoreActions.PUSH_HIGHSCORE_SUCCEDED);
export const pushHighcoreFailed = createAction(highscoreActions.PUSH_HIGHSCORE_FAILED);
