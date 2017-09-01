import { findIndex, filter, includes } from 'lodash';

export default function items(state = [], action) {
  switch (action.type) {
    case 'GET_ITEMS_SUCCESS':
      return action.items;
    case 'ADD_ITEM_SUCCESS':
      const {item} = action.payload;

      return [...state, item];
    case 'UPDATE_ITEM_SUCCESS':
      const index = findIndex(state, function(item){ return item._id == action.item._id });

      return [
       ...state.slice(0, index),
       action.item,
       ...state.slice(index+1)
      ]

    case 'FILTER_BY_SUBJECT':
      const subject = action.payload.subject;
      return filter(state, function(item) { return item.subject == subject});

    case 'FILTER_BY_DEPARTMENT':
      const department = action.payload.department;
      return filter(state, function(item) { return item.department == department});

    case 'FILTER_BY_OWNER_NAME':
      const ownerName = action.payload.name;
      return filter(state, function(item) { return includes(item.user.username, ownerName) });

    case 'FILTER_BY_TITLE':
      const title = action.payload.title;
      return filter(state, function(item) { return includes(item.title, title) });

    case 'ADD_COMMENT_SUCCESS': {
      const index = findIndex(state, function(item) {return item._id == action.item._id});
      return [...state.slice(0, index), action.item, ...state.slice(index+1)]
    }
    case 'DELETE_COMMENT_SUCCESS': {
      const index = findIndex(state, function(item) {return item._id == action.item._id});
      return [...state.slice(0, index), action.item, ...state.slice(index+1)]
    }

    case 'ADD_ITEM_ERROR':
    case 'GET_ITEMS_ERROR':
    case 'ADD_COMMENT_ERROR':
    case 'DELETE_COMMENT_ERROR':
    default:
      return state;
  }
}
