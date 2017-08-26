export default function user(state = [], action) {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return action.user
    case 'UPDATE_USER_SUCCESS':
      return action.user
    case 'GET_USER_ERROR':
    default:
      return state;
  }
}