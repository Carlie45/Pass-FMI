import { findIndex } from 'lodash';

export default function items(state = [], action) {
  switch (action.type) {
    case 'GET_ITEMS_SUCCESS':
      return action.items
    case 'UPDATE_ITEM_SUCCESS':
      return action.items
    case 'ADD_COMMENT_SUCCESS':
    const index = findIndex(state, function(item) {return item._id == action.item._id});
      return [...state.slice(0, index), action.item, ...state.slice(index+1)]
    case 'DELETE_COMMENT_SUCCESS':
    const ind = findIndex(state, function(item) {return item._id == action.item._id});
      return [...state.slice(0, ind), action.item, ...state.slice(ind+1)]
    case 'GET_ITEMS_ERROR':
    case 'ADD_COMMENT_ERROR':
    case 'DELETE_COMMENT_ERROR':
    default:
      return state;
  }
}