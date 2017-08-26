import React from 'react';
import ItemsList from './items-list';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
class Items extends React.Component {
  componentWillMount() {
    this.props.actions.getItems();
  }

  render() {
    console.log(this.props.items, 'wiiiiii');
    return (
      <div className="container">
        <h3>Учебни материали</h3>
        <table className="items-table">
            <thead>
            <tr>
                <th className="items-header">Заглавие</th>
                <th className="items-header">Предметна област</th>
                <th className="items-header">Добавил</th>
            </tr>
            </thead>
            <ItemsList items={this.props.items} />
        </table>
        <div>
          <Link to="/items-new">New Item</Link>
        </div>
      </div>
    );
  }
}

Items.propTypes = {
  actions: PropTypes.shape({
    getItems: PropTypes.func.isRequired
  }),
  items: PropTypes.array
}

export default Items;
