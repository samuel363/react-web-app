import { combineReducers } from 'redux';

import user from './user';
import booking from './booking';

const reducer = combineReducers({
  booking,
  user,
});

export default reducer;
