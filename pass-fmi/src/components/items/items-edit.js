import React from 'react';
import PropTypes from 'prop-types';
import './items-edit.css';
import { find, assign } from 'lodash'

class ItemsEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state={};
    this.item={};
  }

  componentWillMount() {
    this.getCurrentItem(parseInt(this.props.match.params.itemId));
  }

  handleSubmit = (event) => {
    const composed_item = assign(this.state.item, this.item);
    if ( this.props.user && (this.props.user.role == 'Admin' || this.props.user._id == this.getItem().user._id) ) {
      this.props.actions.editItem(composed_item);
    }
    event.preventDefault();

    this.props.history.push(`/items/${this.props.match.params.itemId}`);
  }

  getCurrentItem = (itemId) => {
    const item = find(this.props.items, (item) => item._id == itemId)

    this.setState({item: item })
  }

  render() {
    return (
      <div className="items-new-container">
        <div className="container">
          <h3>Добавяне на учебен материал</h3>
        </div>
        <form className="items-new" onSubmit={this.handleSubmit}>
          <label>
            Subject:
            <input className="form-control" defaultValue={this.state.item.subject} type="text" onChange={ e => {
              this.item.subject = e.target.value;
            }}/>
          </label>

          <label>
            Department:
            <input className="form-control" defaultValue={this.state.item.department} type="text" onChange={ e => {
              this.item.department = e.target.value;
            }}/>
          </label>

          <label>
            Title:
            <input className="form-control" defaultValue={this.state.item.title} type="text" onChange={ e => {
              this.item.title = e.target.value;
            }}/>
          </label>

          <label>
            Price:
            <input className="form-control" defaultValue={this.state.item.price} type="text" onChange={ e => {
              this.item.price = parseInt(e.target.value);
            }}/>
          </label>

          <button className="add-item-button btn-success" type="submit" value="Submit">Редактирай</button>
        </form>
      </div>
    );
  }
}

ItemsEdit.propTypes = {
  actions: PropTypes.shape({
    editItem: PropTypes.func.isRequired
  }),
  items: PropTypes.array.isRequired
}

export default ItemsEdit;
