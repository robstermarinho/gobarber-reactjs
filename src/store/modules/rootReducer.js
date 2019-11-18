import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';

// Combine all reducers in a same place
export default combineReducers({
  auth,
  user,
});
