import React from 'react';
import { connect } from 'react-redux';
import ItemsList from './items-list';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{id: 1, title: 'Test 1', subject: 'Math', author: 'White Rose'},
                           {id: 2, title: 'Test 2', subject: 'Math', author: 'White Rose'}]};
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
            <ItemsList items={this.state.items} />
        </table>
      </div>
    );
  }
}

export default connect()(Items);