import { put, call, takeLatest } from 'redux-saga/effects';

import apiCall from '@/redux/api/apiCall';
import URL_TUTEN from '@/redux/api/url';
import config from '@/config';
import {
  GET_LOGIN, GET_LOGIN_ERROR,
  GET_LOGIN_SUCCESS,
} from '@/redux/types';

export function* setInfoLogin({ payload }) {
  const { email, password } = payload;
  const url = `${URL_TUTEN}${email}`;
  const { app } = config;
  try {
    const response = yield call(apiCall, url, 'PUT', null, null, {
      app, password,
    });
    sessionStorage.setItem('token', response.data.sessionTokenBck);
    sessionStorage.setItem('email', email);
    yield put({
      type: GET_LOGIN_SUCCESS,
      payload: { token: response.data.sessionTokenBck, email },
    });
  } catch (e) {
    yield put({ type: GET_LOGIN_ERROR, payload: 'error.login' });
  }
}

export function* getLoginInfo() {
  yield takeLatest(GET_LOGIN, setInfoLogin);
}
