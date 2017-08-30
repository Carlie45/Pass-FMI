export default function comments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT_SUCCESS':
      return action.comments
    case 'DELETE_COMMENT_SUCCESS':
      return action.comments
    case 'ADD_COMMENT_ERROR':
    case 'DELETE_COMMENT_ERROR':
    default:
      return state;
  }
}