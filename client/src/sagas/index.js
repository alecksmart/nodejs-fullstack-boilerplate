import { all, fork } from 'redux-saga/effects';
import user from './user';

const allSagas = [
  user,
];

export default function* rootSaga() {
  yield all(allSagas.map(fork));
}
