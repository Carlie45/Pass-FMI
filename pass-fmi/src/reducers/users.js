export default function users(state = [], action) {
  switch (action.type) {
    case 'GET_USERS_SUCCESS':
      return action.users
    case 'UPDATE_USER_SUCCESS':
      return action.users
    case 'GET_USERS_ERROR':
    default:
      return state;
  }
}