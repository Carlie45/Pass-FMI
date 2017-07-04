import axios from 'axios'

export function getItems() {
  return dispatch => {
    axios.get('/api/items/itemsList')
      .then(response => {
        dispatch({type: 'GET_ITEMS_SUCCESS', items: response.data});
      })
      .catch(() => dispatch({type: 'GET_ITEMS_ERROR'}));
  }
};
