import {combineReducers } from 'redux'

import counter from './counter';
import items from './items';
import users from './users';
import user from './user';
import userItemsIds from './user-items';

// export default combineReducers(
//   {
//     counter,
//     items
//   }
// )

export default {
  counter,
  items,
  users,
  user,
  userItemsIds
}
