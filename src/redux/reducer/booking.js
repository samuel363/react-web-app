import {
  GET_BOOKING, GET_BOOKING_ERROR, GET_BOOKING_SUCCESS, LOGOUT,
} from '../types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_BOOKING:
      return { ...state, bookingLoading: true };
    case GET_BOOKING_SUCCESS:
      return { ...state, bookingLoading: false, bookingList: payload };
    case GET_BOOKING_ERROR:
      return {
        ...state, bookingLoading: false, bookingList: [], error: payload,
      };
    case LOGOUT:
      return { };
    default:
      return { ...state };
  }
};
