import { GET_BOOKING, GET_BOOKING_ERROR } from '../types';

export const getBooking = (payload) => ({ type: GET_BOOKING, payload });
export const resetErrorBooking = (payload) => ({ type: GET_BOOKING_ERROR, payload });
