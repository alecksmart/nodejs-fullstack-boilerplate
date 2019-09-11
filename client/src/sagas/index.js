import { all, fork } from 'redux-saga/effects';
import user from './user';
import highscore from './highscore';

const allSagas = [
  user,
  highscore,
];

export default function* rootSaga() {
  yield all(allSagas.map(fork));
}
