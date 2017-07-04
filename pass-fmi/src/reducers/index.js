import {combineReducers } from 'redux'

import counter from './counter';
import items from './items';

// export default combineReducers(
//   {
//     counter,
//     items
//   }
// )

export default {
  counter,
  items
}
