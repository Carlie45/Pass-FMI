import axios from 'axios';

export function getUser(username) {
  return dispatch => {
    axios.get('/api/users/' + username)
      .then(response => {
        dispatch({type: 'GET_USER_SUCCESS', user: response.data});
      })
      .catch(() => dispatch({type: 'GET_USER_ERROR'}));
  }
};

export function getUserItemsIds(username) {
  return dispatch => {
    axios.get('/api/items/itemsList/' + username)
      .then(response => {
        dispatch({type: 'GET_USER_ITEMS_IDS_SUCCESS', userItemsIds: response.data});
      })
      .catch(() => dispatch({type: 'GET_USER_ITEMS_IDS_ERROR'}));
  }
}