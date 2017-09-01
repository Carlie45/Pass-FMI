import Auth from '../services/Authentication'
// import ACTIONS from './action_types';
// import UsersAPI from '../services/users';

export function login(username, password, nextPath) {
  let user;

  return dispatch => {
    return Auth.login(username, password)
      .then(user => {
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
        dispatch({
          type: 'REG_USER',
          payload: {
            user,
            error: null
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

export function logout() {
  return dispatch => {
    return Auth.logout()
      .then(response => {
        dispatch({
          type: 'USER_LOGOUT',
          payload: {
            user: null,
            error: null
          }
        });
      }, error => {
        dispatch({
          type: 'USER_LOGOUT',
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
