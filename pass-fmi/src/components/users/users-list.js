import React from 'react';
import User from './user';
import './index.css';

class UsersList extends React.Component {
  render() {
    return (
      <tbody>{
            this.props.users.map(
              user => (<User key={user._id} user={user} />)
            )}
      </tbody>
    );
  }
}

export default UsersList;
