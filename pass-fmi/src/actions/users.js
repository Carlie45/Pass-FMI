import axios from 'axios'

export function getUsers() {
  return dispatch => {
    axios.get('/api/users/usersList')
      .then(response => {
        dispatch({type: 'GET_USERS_SUCCESS', users: response.data});
      })
      .catch(() => dispatch({type: 'GET_USERS_ERROR'}));
  }
};
