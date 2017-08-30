import React from 'react';
import Item from './item';
import './index.css';

class ItemsList extends React.Component {
  render() {
    return <tbody>{this.props.items.map(item => (<Item key={item._id} item={item} />))}</tbody>
  }
}

export default ItemsList;
