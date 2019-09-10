import { handleActions } from 'redux-actions';
import actionNames from '../utils/actionNames';
import {
  fetchHighcoreRequested,
  fetchHighcoreSucceded,
  fetchHighcoreFailed,

  pushHighcoreRequested,
  pushHighcoreSucceded,
  pushHighcoreFailed,
} from '../actions/highscore';

export const HIGHSCORE_LOADING = actionNames([
  'FETCH_HIGHSCORES_REQUESTED',
  'PUSH_HIGHSCORE_REQUESTED',
]);

export const initialState = {
  user: {},
  highScores: [],
  errors: [],
  loading: [],
};

export default handleActions({
  [fetchHighcoreRequested](state) {
    return {
      ...state,
      loading: [...state.loading, HIGHSCORE_LOADING.FETCH_HIGHSCORES_REQUESTED],
      errors: [],
    };
  },
  [fetchHighcoreSucceded](state, action) {
    return {
      ...state,
      loading: state.loading.filter(e => e !== HIGHSCORE_LOADING.FETCH_HIGHSCORES_REQUESTED),
      errors: [],
      highScores: action.payload.highScores,
    };
  },
  [fetchHighcoreFailed](state, action) {
    return {
      ...state,
      loading: state.loading.filter(e => e !== HIGHSCORE_LOADING.FETCH_HIGHSCORES_REQUESTED),
      errors: action.payload.errors,
    };
  },

  [pushHighcoreRequested](state) {
    return {
      ...state,
      loading: [...state.loading, HIGHSCORE_LOADING.PUSH_HIGHSCORE_REQUESTED],
      errors: [],
    };
  },
  [pushHighcoreSucceded](state) {
    return {
      ...state,
      loading: state.loading.filter(e => e !== HIGHSCORE_LOADING.PUSH_HIGHSCORE_REQUESTED),
      errors: [],
    };
  },
  [pushHighcoreFailed](state, action) {
    return {
      ...state,
      loading: state.loading.filter(e => e !== HIGHSCORE_LOADING.PUSH_HIGHSCORE_REQUESTED),
      errors: action.payload.errors,
    };
  },
}, initialState);
