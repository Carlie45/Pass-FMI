import React from 'react';
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
import './index.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToDetailsView: false,
      selectedItemIndex: -1,
      onBack: false
    }
  }

  handleClick(itemId) {
    this.setState({selectedItemIndex : itemId});
    this.setState({redirectToDetailsView : true});
  }

  render() {
    if (this.state.redirectToDetailsView) {
      let url = '/items/' + this.state.selectedItemIndex;
      return <Redirect to={url} />;
    }

    return (
    <tr onClick={() => this.handleClick(this.props.item._id)}>
      { this.props.item.title && <td> {this.props.item.title}</td>}
      <td> {this.props.item.subject}</td>
      {this.props.item.user && <td> {this.props.item.user.username}</td>}
      {!this.props.item.user && <td> Anonymous </td>}
    </tr>
  )}
}

export default withRouter(Item);
