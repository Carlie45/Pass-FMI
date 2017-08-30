import axios from 'axios'

export function addComment(itemId, username, commentText) {
  return dispatch => {
    const body = {username: username, content: commentText};
    axios.post('/api/items/addComment/' + itemId, body)
      .then(response => {
        dispatch({type: 'ADD_COMMENT_SUCCESS', item: response.data});
      })
      .catch(() => dispatch({type: 'ADD_COMMENT_ERROR'}));
  }
};

export function deleteComment(itemId, commentId) {
    return dispatch => {
      const body = {_id: commentId};
      axios.delete('/api/items/deleteComment/' + itemId, body)
      .then(response => {
        dispatch({type: 'DELETE_COMMENT_SUCCESS', item: response.data});
      })
      .catch(() => dispatch({type: 'DELETE_COMMENT_ERROR'}));
    }
};