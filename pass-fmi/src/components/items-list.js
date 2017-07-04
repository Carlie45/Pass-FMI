import React from 'react';
import Item from './item';
import '../../styles/styles.css';

class ItemsList extends React.Component {
  render() {
    console.log(this.props.items, 'wiiiiiieklrjseikfhdjkhf');
    return (
      <tbody>{
            this.props.items.map(
              item => (<Item key={item._id} item={item} />)
            )}
      </tbody>
    );
  }
}

export default ItemsList;
