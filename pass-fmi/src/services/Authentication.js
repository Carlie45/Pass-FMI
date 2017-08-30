import Connection from './Connection.js';

class AuthService {
  login(username, password) {
    const path = '/users/login';
    return Connection.send(path, {username, password}, 'POST')
      .then(data => {
        return data.user;
      });
  }

  register(user) {
    const path = '/users/register';
    return Connection.send(path, user, 'POST')
      .then(data => {
        return data.user;
      });
  }

  logout() {
    const path = '/users/logout';
    return Connection.send(path)
      .then(data => {
        return data;
      });
  }
}

export default new AuthService();
