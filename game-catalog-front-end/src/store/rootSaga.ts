import { all, fork } from 'redux-saga/effects';

import gamesSaga from './games/gamesSagas';

export function* rootSaga() {
  yield all([fork(gamesSaga)]);
}
