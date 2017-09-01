import React from 'react';
import UsersList from './users-list';
import PropTypes from 'prop-types';
import './index.css';

class Users extends React.Component {
  componentWillMount() {
    this.props.actions.getUsers();
  }

  render() {
    return (
      <div id="users" className="users">
        <h3>Потребители</h3>
        <table className="users-table">
            <thead>
            <tr>
                <th className="users-header">Потребителско име</th>
                <th className="users-header">Първо име</th>
                <th className="users-header">Фамилия</th>
                <th className="users-header">E-mail</th>
            </tr>
            </thead>
            <UsersList users={this.props.users} />
        </table>
      </div>
    );
  }
}

Users.propTypes = {
  actions: PropTypes.shape({
    getUsers: PropTypes.func.isRequired
  }),
  users: PropTypes.array
}

export default Users;
