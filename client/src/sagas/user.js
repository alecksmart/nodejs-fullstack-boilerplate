import { all, takeLatest, put/* , call, select */ } from 'redux-saga/effects';

import {
  userActions,
  userLoginSucceded,
  userLoginFailed,
} from '../actions/user';

// import { gql } from 'apollo-boost';
// const query = gql`
//   query {
//     highscores {
//       highscore
//       user {
//         name
//       }
//     }
//   }
// `;

function* performLogin() {
  try {
    // do client
    // const data = yield select(state => state.user);
    // const result = yield call(graphQlClient, args);
    yield put(userLoginSucceded({ user: {} }));
  } catch (e) {
    console.error(e);
    yield put(userLoginFailed(e.getMessage()));
  }
}

export default function* () {
  yield all([
    takeLatest(userActions.USER_LOGIN_REQUESTED, performLogin),
  ]);
}
