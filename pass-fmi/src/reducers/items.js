export default function items(state = [], action) {
  switch (action.type) {
    case 'GET_ITEMS_SUCCESS':
      return action.items
    case 'UPDATE_ITEM_SUCCESS':
      return action.items
    case 'GET_ITEMS_ERROR':
    default:
      return state;
  }
}