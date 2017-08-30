export default function comment(state = {}, action) {
  switch (action.type) {
    case 'DELETE_COMMENT_SUCCESS':
      return action.item
    case 'DELETE_COMMENT_ERROR':
    default:
      return state;
  }
}