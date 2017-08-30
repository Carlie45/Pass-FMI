// import ACTION_TYPES from '../actions/action_types';
import _ from 'lodash';

const initialState = {
  user: null,
  error: null
};

export default function auth(state = initialState, action) {
  let result;

  switch (action.type) {
    case 'AUTH_COMPLETED': {
      const {user, error} = action.payload;

      result = _.assign({}, state, {user, error});
      break;
    }
    case 'REG_USER': {
      const {user,error} = action.payload;

      result = _.assign({}, state, {user, error});
      break;
    }

    case 'USER_LOGOUT': {
      const {user,error} = action.payload;

      result = _.assign({}, state, {user, error});
      break;
    }

    default: {
      result = _.assign({}, state);
    }
  }
  return result;
}
