import React from 'react';
import ItemsList from './items-list';
import PropTypes from 'prop-types';

class Items extends React.Component {
  componentWillMount() {
    this.props.actions.getItems();
  }

  render() {
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
