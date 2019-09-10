import { all, takeLatest, call } from 'redux-saga/effects';
import { gql } from 'apollo-boost';
import { graphqlClient } from '../utils/graphqlClient';
import {
  highscoreActions,
  // fetchHighcoreSucceded,
  // fetchHighcoreFailed,
} from '../actions/highscore';
import { fetchHighscoresQuery } from '../queries/highscore';

function* fetchHighscores() {
  try {
    const query = gql(fetchHighscoresQuery({ limit: 5, offset: 0 }));
    // do client
    // const data = yield select(state => state.user);
    const result = yield call(graphqlClient.query, { query });
    console.log('ALEC: result', result);
    // yield put(userLoginSucceded({ user: {} }));
  } catch (e) {
    console.error(e);
    // yield put(userLoginFailed(e.getMessage()));
  }
}

export default function* () {
  yield all([
    takeLatest(highscoreActions.FETCH_HIGHSCORES_REQUESTED, fetchHighscores),
  ]);
}
