export default function userItemsIds(state = [], action) {
    switch(action.type) {
      case 'GET_USER_ITEMS_IDS_SUCCESS':
        return action.userItemsIds
      case 'GET_USER_ITEMS_IDS_ERROR':
      default:
        return state;
    }
}