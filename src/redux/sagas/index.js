import { all } from 'redux-saga/effects';
import { getLoginInfo } from './user';
import { getBookingInfo } from './booking';

export default function* rootSaga() {
  yield all([
    getLoginInfo(),
    getBookingInfo(),
  ]);
}
