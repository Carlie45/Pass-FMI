import React from 'react';
import UserItem from './user-item';

import './index.css';

class UserItemsList extends React.Component {
  render() {
    return (
      <tbody>{
          this.props.items.map(
            item => (item.user.username === this.props.username && <UserItem key={item._id} item={item} />)
          )}
      </tbody>
    );
  }
}

export default UserItemsList;
