import superagent from 'superagent';
import Promise from 'bluebird';

class Connection {
  send(path, data, method) {
    const url = `http://localhost:3000/api${path}`;
    const request = superagent(method || 'GET', url)
      .withCredentials()
      .type('application/json')
      .accept('json');

    if (method === 'PUT' || method === 'POST') {
      request.send(data);
    } else {
      request.query(data);
    }

    return Promise.promisify(request.end.bind(request))()
      .then(resp => {
        return resp.body;
      }, err => {
        const message = err.response.body
          ? err.response.body.error
          : err.message;

        const error = new Error(message);

        return Promise.reject(error);
      });
  }
}

export default new Connection();
