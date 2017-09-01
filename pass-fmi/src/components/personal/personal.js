import React from 'react';
import { PropTypes } from 'prop-types';
import ItemsList from '../items-list/items-list';
import './index.css';

class Personal extends React.Component {
  componentWillMount() {
    if(this.props.items.length == 0) {
      this.props.actions.getItems();
    }
  }

  getOwnedItems = () => {
    return this.props.items.filter((item) => item.user._id === this.props.user._id);
  }

  render() {
    return (
      <div className="personal">
        <div className="personal-info">
          <p className="paragraph-body"><strong>Име:</strong> {this.props.user.firstName}</p>
          <p className="paragraph-body"><strong>Фамилия:</strong> {this.props.user.lastName}</p>
          <p className="paragraph-body"><strong>E-mail:</strong> {this.props.user.email}</p>
          <p className="paragraph-body"><strong>Username:</strong> {this.props.user.username}</p>
        </div>
        <h2>Моите учебни материали</h2>
        <table className="personal-items">
          <ItemsList items={this.getOwnedItems()} />
        </table>
      </div>
    );
  }
}

Personal.propTypes = {
  actions: PropTypes.shape({
    getItems: PropTypes.func.isRequired
  }),
  user: PropTypes.object,
  items: PropTypes.array
}

export default Personal
