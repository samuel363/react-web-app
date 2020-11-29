import { put, call, takeLatest } from 'redux-saga/effects';

import apiCall from '@/redux/api/apiCall';
import URL_TUTEN from '@/redux/api/url';
import config from '@/config';
import filterData from '@/helpers/filterData';
import {
  GET_BOOKING, GET_BOOKING_ERROR, GET_BOOKING_SUCCESS,
} from '@/redux/types';

export function* setInfoBooking({ payload }) {
  const { adminemail, token } = payload;
  const { email, app, current } = config;
  const url = `${URL_TUTEN}${email}/bookings`;
  const headers = { app, token, adminemail };
  const params = { current };
  try {
    const response = yield call(apiCall, url, 'GET', params, null, headers);
    yield put({
      type: GET_BOOKING_SUCCESS,
      payload: filterData(response.data),
    });
  } catch (e) {
    yield put({ type: GET_BOOKING_ERROR, payload: 'error.booking' });
  }
}

export function* getBookingInfo() {
  yield takeLatest(GET_BOOKING, setInfoBooking);
}
