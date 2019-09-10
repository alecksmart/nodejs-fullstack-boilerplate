import { all, takeLatest, call, put } from 'redux-saga/effects';
import { gql } from 'apollo-boost';
import { graphqlClient } from '../utils/graphqlClient';
import {
  highscoreActions,
  fetchHighcoreSucceded,
  fetchHighcoreFailed,
} from '../actions/highscore';
import { fetchHighscoresQuery } from '../queries/highscore';

function* fetchHighscores() {
  try {
    const query = gql(fetchHighscoresQuery({ limit: 5, offset: 0 }));
    const result = yield call(graphqlClient.query, { query });
    const { data: { highscores } } = result;
    yield put(fetchHighcoreSucceded({ highscores }));
  } catch (e) {
    console.error(e);
    yield put(fetchHighcoreFailed(e));
  }
}

export default function* () {
  yield all([
    takeLatest(highscoreActions.FETCH_HIGHSCORES_REQUESTED, fetchHighscores),
  ]);
}
