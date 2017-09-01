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

export function addItem(item) {
  return dispatch => {
    axios.post('api/items/', item)
      .then(response => {
        dispatch({
          type: 'ADD_ITEM_SUCCESS',
          payload: {
            item: response.data
          }
        });
      })
      .catch(() => dispatch({type: 'ADD_ITEM_ERROR'}))
  }
}

export function deleteItem(itemId) {
  return dispatch => {
    axios.delete('/api/items/deleteItem/' + itemId)
    .then(response => {
      dispatch({
        type: 'DELETE_ITEM_SUCCESS',
        payload: {
          item: response.data
        }
      })
    })
    .catch(() => dispatch({type: 'DELETE_ITEM_ERROR'}))
  }
}

export function filterBySubject(subject) {
  return dispatch => {
    dispatch({
      type: 'FILTER_BY_SUBJECT',
      payload: {
        subject
      }
    })
  }
}

export function filterByDepartment(department) {
  return dispatch => {
    dispatch({
      type: 'FILTER_BY_DEPARTMENT',
      payload: {
        department
      }
    })
  }
}

export function filterByOwnerName(name) {
  return dispatch => {
    dispatch({
      type: 'FILTER_BY_OWNER_NAME',
      payload: {
        name
      }
    })
  }
}

export function filterByTitle(title) {
  return dispatch => {
    dispatch({
      type: 'FILTER_BY_TITLE',
      payload: {
        title
      }
    })
  }
}

export function editItem(item) {
  const bodyItem = {
    subject: item.subject,
    price: item.price,
    department: item.department,
    title: item.title
  }

  return dispatch => {
    axios.put(`/api/items/${item._id}`, bodyItem)
      .then(response => {
        dispatch({
          type: 'UPDATE_ITEM_SUCCESS',
          item: response.data
        });
      })
      .catch(() => dispatch({type: 'UPDATE_ITEM_ERROR'})
    );
  }
  return;
}
