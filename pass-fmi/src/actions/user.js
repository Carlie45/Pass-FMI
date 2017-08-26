import axios from 'axios';

export function getUser(username) {
  return dispatch => {
    axios.get('/api/users/' + username)
      .then(response => {
          console.log("in dispatch");
        dispatch({type: 'GET_USER_SUCCESS', user: response.data});
      })
      .catch(() => dispatch({type: 'GET_USER_ERROR'}));
  }
};