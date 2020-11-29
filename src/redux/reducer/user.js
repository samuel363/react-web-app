import {
  GET_EMAIL, GET_LOGIN, GET_LOGIN_ERROR, GET_LOGIN_SUCCESS, LOGOUT,
} from '../types';

const INITIAL_STATE = {
  token: sessionStorage.getItem('token') || null,
  email: sessionStorage.getItem('email') || null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_LOGIN:
      return { ...state, loginLoading: true };
    case GET_LOGIN_SUCCESS:
      return {
        ...state, loginLoading: false, token: payload.token, email: payload.email,
      };
    case GET_LOGIN_ERROR:
      return { ...state, loginLoading: false, error: payload };
    case GET_EMAIL:
      return { ...state, email: payload };
    case LOGOUT:
      return { };
    default:
      return { ...state };
  }
};
