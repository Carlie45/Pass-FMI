import React from 'react';
import { withRouter } from 'react-router-dom';
import { store } from '../..//index';
import { push } from 'react-router-redux';

import './index.css';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToDetailsView: false,
      selectedUser: -1
    }
  }

  onBackButtonEvent = (e) => {
    e.preventDefault();
  }

  componentDidMount () {
    window.onpopstate = this.onBackButtonEvent;
  }

  handleClick(username) {
    this.setState({selectedUser : username, redirectToDetailsView : true});
    store.dispatch(push('/users/' + username));
  }

  hasUserNameInUrl = () => {
    let endInd = window.location.href.lastIndexOf('/');
    let lastPartOfUrl = window.location.href.substring(endInd+1);
    if (lastPartOfUrl === 'users' || lastPartOfUrl === 'users/') {
        return false;
    }
    return true;
  }

  render() {
   return (
    <tr onClick={() => this.handleClick(this.props.user.username)}>
      <td> {this.props.user.username}</td>
      <td> {this.props.user.firstName}</td>
      <td> {this.props.user.lastName}</td>
      <td> {this.props.user.email}</td>
    </tr>
  )}
}

export default withRouter(User);
