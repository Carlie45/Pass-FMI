import Auth from '../services/Authentication'
// import ACTIONS from './action_types';
// import UsersAPI from '../services/users';

export function login(username, password, nextPath) {
  let user;

  return dispatch => {
    return Auth.login(username, password)
      .then(user => {
        console.log('Logged user', user);
        console.log('Dispatch event');
        dispatch({
          type: 'AUTH_COMPLETED',
          payload: {
            user,
            error: null
          },
          meta: {
            transition: () => {
              return {
                pathname: `/${nextPath}`
              };
            }
          }
        });
      }, error => {
        dispatch({
          type: 'AUTH_COMPLETED',
          payload: {
            user: null,
            error: 'error.message'
          }
        });
      });
  };
}

export function register(user, nextPath) {
  return dispatch => {
    return Auth.register(user)
      .then(user => {
        console.log('Logged user', user);
        console.log('Dispatch event');
        dispatch({
          type: 'REG_USER',
          payload: {
            user,
            error: null
          },
          meta: {
            transition: () => {
              return {
                pathname: `/${nextPath}`
              };
            }
          }
        });
      }, error => {
        dispatch({
          type: 'REG_USER',
          payload: {
            user: null,
            error: 'error.message'
          }
        });
      });
  };
}


// export function register(userData) {
//   return dispatch => {
//     return UsersAPI.createUser(userData)
//       .then(() => {
//         dispatch({
//           type: ACTIONS.REGISTER_USER,
//           payload: {},
//           meta: {
//             transition: () => {
//               return {
//                 pathname: `/login`
//               };
//             }
//           }
//         })
//       })
//   }
// }
