import React from 'react';
// import ItemsList from './items-list';
import PropTypes from 'prop-types';
import '../../styles/styles.css';

class ItemsNew extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    super(props);
    //here should set logged userId this should be some id which is in the db
    this.item = {
      userId: '59a0894dca83fc177b9e71ee'
    };
    console.log('HSITORY')
    console.log(this.props);
    console.log(this.props.history)
    // console.log(this.props.actions.addItem);
  }
  handleSubmit(event) {
  // console.log(this.item)
  this.props.actions.addItem(this.item);
   event.preventDefault();
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
          <button onClick={this.handleClick}>
            Navigate outside of component to About page
          </button>
        </form>
      </div>
    );
  }
}

ItemsNew.propTypes = {
  actions: PropTypes.shape({
    addItem: PropTypes.func.isRequired
  }),
  items: PropTypes.array
}

export default ItemsNew;
