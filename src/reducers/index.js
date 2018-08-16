import { combineReducers } from 'redux';

import profile from './profile';
import user from './user';
import messages from './messages';

export default combineReducers({
  profile,
  user,
  messages
});
