import React from 'react';
import PropTypes from 'prop-types';

import './items-new.css';

class ItemsNew extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    super(props);

    this.item = {
      userId: this.props.user._id
    };
  }

  handleSubmit(event) {
  this.props.actions.addItem(this.item);
   event.preventDefault();
   this.props.history.push('/items');
  }

  handleClick(e) {
    this.props.history.push('/home');
    e.preventDefault();
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
            <input className="form-control" type="text" onChange={ e => {
              this.item.subject = e.target.value;
            }}/>
          </label>

          <label>
            Department:
            <input className="form-control" type="text" onChange={ e => {
              this.item.department = e.target.value;
            }}/>
          </label>

          <label>
            Title:
            <input className="form-control" type="text" onChange={ e => {
              this.item.title = e.target.value;
            }}/>
          </label>

          <label>
            Price:
            <input className="form-control" type="text" onChange={ e => {
              this.item.price = e.target.value;
            }}/>
          </label>

          <button className="add-item-button btn-success" type="submit" value="Submit">Добави</button>
        </form>
      </div>
    );
  }
}

ItemsNew.propTypes = {
  actions: PropTypes.shape({
    addItem: PropTypes.func.isRequired
  }),
  items: PropTypes.array,
  user: PropTypes.object
}

export default ItemsNew;
