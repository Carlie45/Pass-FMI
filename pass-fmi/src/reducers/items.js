export default function items(state = [], action) {
  switch (action.type) {
    case 'GET_ITEMS_SUCCESS':
      console.log('lalalalal', action.items)
      return action.items
      break;
    case 'GET_ITEMS_ERROR':
    default:
      return state;
  }
}
