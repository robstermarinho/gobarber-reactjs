import { combineReducers } from 'redux';

import auth from './auth/reducer';

// Combine all reducers in a same place
export default combineReducers({
  auth,
});
