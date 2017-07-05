import {combineReducers } from 'redux'

import counter from './counter';
import items from './items';
import auth from './auth';

console.log('weokjfkwjqwertyyyyyyyyyyyyyyyy', items)

// export default combineReducers(
//   {
//     counter,
//     items
//   }
// )

export default {
  counter,
  items,
  auth
}
