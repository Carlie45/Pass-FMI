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
      console.log('REUDCER');
      const {user, error} = action.payload;
      console.log(user);

      result = _.assign({}, state, {user, error});
      break;
    }
    case 'REG_USER': {
      console.log('RED');
      const {user,error} = action.payload;
      console.log(user);
      result = _.assign({}, state, {user, error});
      break;
    }


    // case 'USER_FOLLOWED': {
    //   const {user} = action.payload;
    //
    //   result = _.assign({}, {user});
    //   break;
    // }
    //
    // case 'USER_UNFOLLOWED': {
    //   const {user} = action.payload;
    //
    //   result = _.assign({}, {user});
    //   break;
    // }

    default: {
      result = _.assign({}, state);
    }
  }
  console.log(result);
  console.log('RESULT');
  return result;
}
