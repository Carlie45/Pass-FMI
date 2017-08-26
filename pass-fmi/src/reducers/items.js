import _ from 'lodash';

export default function items(state = [], action) {
  switch (action.type) {
    case 'GET_ITEMS_SUCCESS':
      return action.items;
    case 'GET_ITEMS_ERROR':
      console.log('Error get items')
      return state;
    case 'ADD_ITEM_SUCCESS': {
      console.log('ADD_ITEM_SUCCESS');
      const {item} = action.payload;
      console.log(item);

      return [...state, item];
    }
    case 'ADD_ITEM_ERROR':
    default:
      return state;
  }
}
