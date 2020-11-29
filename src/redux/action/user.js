import {
  GET_EMAIL, GET_LOGIN, GET_LOGIN_ERROR, LOGOUT,
} from '../types';

export const getLogin = (payload) => ({ type: GET_LOGIN, payload });
export const clearError = (payload = null) => ({ type: GET_LOGIN_ERROR, payload });
export const getEmail = (payload = null) => ({ type: GET_EMAIL, payload });
export const logout = () => ({ type: LOGOUT });
