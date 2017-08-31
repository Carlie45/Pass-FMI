import React from 'react';
import PropTypes from 'prop-types';

import ItemsFilter from '../items-filter/items-filter';
import ItemsList from '../items-list/items-list';

import './index.css';

class Items extends React.Component {
  componentWillMount() {
    this.props.actions.getItems();
    this.forceUpdate();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.items !== this.props.items;
  }

  render() {
    console.log('items')
    console.log(this.props.user)
    return (
      <div className="container">
        <h3>Учебни материали</h3>

        <ItemsFilter items={this.props.items}
          filterBySubject={this.props.actions.filterBySubject}
          getItems={this.props.actions.getItems}
          filterByDepartment={this.props.actions.filterByDepartment}
          filterByOwnerName={this.props.actions.filterByOwnerName}
          filterByTitle={this.props.actions.filterByTitle}
          />

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
        <div className="new-button-container">
          {this.props.user && <button className="btn-success new-btn" onClick={(e) => {
              this.props.history.push('/items-new');
              e.preventDefault();
            }}>
            Добави
          </button>}
        </div>
      </div>
    );
  }
}

Items.propTypes = {
  actions: PropTypes.shape({
    getItems: PropTypes.func.isRequired,
    filterBySubject: PropTypes.func.isRequired,
    filterByDepartment: PropTypes.func.isRequired,
    filterByOwnerName: PropTypes.func.isRequired,
    filterByTitle: PropTypes.func.isRequired
  }),
  items: PropTypes.array,
  user: PropTypes.object
}

export default Items;
