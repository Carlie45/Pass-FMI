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

export function getUser(username) {
  return dispatch => {
    console.log(username);
    axios.get('/api/users/' + username)
      .then(response => {
        dispatch({type: 'GET_USER_SUCCESS', user: response.data});
      })
      .catch(() => dispatch({type: 'GET_USER_ERROR'}));
  }
};