import React from 'react';
import UsersList from './users-list';
import PropTypes from 'prop-types';

class Users extends React.Component {
  componentWillMount() {
    this.props.actions.getUsers();
  }

  render() {
    return (
      <div className="container">
        <h3>Потребители</h3>
        <table className="items-table">
            <thead>
            <tr>
                <th className="items-header">Потребителско име</th>
                <th className="items-header">Първо име</th>
                <th className="items-header">Фамилия</th>
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