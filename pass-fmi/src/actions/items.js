import axios from 'axios'
import { Link } from 'react-router-dom';


export function getItems() {
  console.log('Action');
  return dispatch => {
    axios.get('/api/items/itemsList')
      .then(response => {
        dispatch({type: 'GET_ITEMS_SUCCESS', items: response.data});
      })
      .catch(() => dispatch({type: 'GET_ITEMS_ERROR'}));
  }
};

export function addItem(item) {
  return dispatch => {
    axios.post('api/items/', item)
      .then(response => {
        console.log(response.data);
        console.log('Response');
        dispatch({
          type: 'ADD_ITEM_SUCCESS',
          payload: {
            item: response.data
          },
          meta: {
            //This don't work
            transition: () => {
              return {
                pathname: `/items`
              };
            }
          }
        });
      })
      .catch(() => dispatch({type: 'ADD_ITEM_ERROR'}))
  }
}
